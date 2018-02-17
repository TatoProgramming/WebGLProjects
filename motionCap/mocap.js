"use strict";

var canvas;
var gl;
var audio;

const near = 0.01;
const far = 100;
const radius = 5;
var atX = 0.0;
var atY = 0.0;
var atZ = 0.0;

// Viewing
var aspect = 1.0;
var view = "A";
var angle = 0;
var fieldOfView = 10.0;
var frameNumber = 0;
var isPaused = false;

// Data
var bvh;

var sphere;
var floor;
var axis;
var segment;

var lineBufferId;
var lineColorBufferId;

var sphereProgram, lineProgram;
var vPosition;
var mvMatrix, pMatrix, nMatrix;

var reader = new FileReader();
var matrixStack = [];
var positionStack = [];

reader.onload = function (e) {
    var text = reader.result;
};

function pushPosition(xOffset, yOffset, zOffSet) {
    if (positionStack.length === 0) {
        positionStack.push(new Vec4Position(xOffset, yOffset, zOffSet));
    } else {
        var previousPosition = peekPositionStack();
        var newPosition = new Vec4Position(
            previousPosition.x + xOffset,
            previousPosition.y + yOffset,
            previousPosition.z + zOffSet
        );

        positionStack.push(newPosition);
    }
}

function popPosition() {
    positionStack.pop();
}

function playAudio(fileName) {
    audio = new Audio(fileName);
    audio.play();
}

function stopAudio() {
    audio.stop();
}


function peekPositionStack() {
    return positionStack[positionStack.length - 1];
}

function pushMatrix() {
    matrixStack.push(mat4(mvMatrix));
}

function popMatrix() {
    mvMatrix = matrixStack.pop();
}

var setCamera = function () {

    const at = scale(0.01, vec3(atX, atY, atZ));
    const theta = radians(angle);
    var up = vec3(0.0, 1.0, 0.0);
    var eye = vec3(radius * Math.sin(theta),
        radius * Math.sin(radians(10.0)),
        radius * Math.cos(theta));

    pMatrix = perspective(fieldOfView, aspect, near, far);
    mvMatrix = lookAt(eye, at, up);
};

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    setCamera();

    renderFloor();

    mvMatrix = mult(mvMatrix, scalem(0.01, 0.01, 0.01));

    var root = bvh.roots[0];
    renderChildNode(root, bvh.frames[frameNumber]);

    if (!isPaused) {
        frameNumber++;
    }

    if (frameNumber >= bvh.numFrames) {
        frameNumber = 0;
    }

    requestAnimFrame(render);
}

function getDistance(v, u) {
    if (v.length !== u.length) {
        throw "Not equal in size";
    }
    var sum = 0.0;
    for (var i = 0; i < v.length; ++i) {
        sum += Math.pow(v[i] - u[i], 2);
    }
    return Math.sqrt(sum);
}

function getChildPosition(node, frame) {
    var offset = node.channelOffset;
    var zPos = node.channels.indexOf("Zposition");
    var xPos = node.channels.indexOf("Xposition");
    var yPos = node.channels.indexOf("Yposition");

    var x = xPos < 0 ? node.offsets[0] : frame[offset + xPos];
    var y = yPos < 0 ? node.offsets[1] : frame[offset + yPos];
    var z = zPos < 0 ? node.offsets[2] : frame[offset + zPos];

    return vec3(x, y, z);
}


function renderChildNode(node, frame) {
    // console.log(parent.name);
    for (var i = 0; i < node.children.length; ++i) {

        var offset = node.channelOffset;

        pushMatrix();
        var zRot = node.channels.indexOf("Zrotation");
        var xRot = node.channels.indexOf("Xrotation");
        var yRot = node.channels.indexOf("Yrotation");
        var zPos = node.channels.indexOf("Zposition");
        var xPos = node.channels.indexOf("Xposition");
        var yPos = node.channels.indexOf("Yposition");
        var x = xPos < 0 ? node.offsets[0] : frame[offset + xPos];
        var y = yPos < 0 ? node.offsets[1] : frame[offset + yPos];
        var z = zPos < 0 ? node.offsets[2] : frame[offset + zPos];

        if (node.name === "Hips") {
            atX = frame[offset + xPos];
            atY = frame[offset + yPos];
            atZ = frame[offset + zPos];
        }else{
            pushMatrix();
            var v = vec3(x, y, z);
            var vMag  = length(v);
            var xPrime = vec3(1, 0, 0);
            var abritAxis = cross(v, xPrime);

            var vDotx = dot(v, xPrime);
            // var normalized = vMag * mag(xPrime);
            var theta1 = -(Math.acos(vDotx/vMag) * 180) / Math.PI;

            mvMatrix = mult(mvMatrix, scalem(vMag, vMag, vMag));
            mvMatrix = mult(mvMatrix, rotate(theta1, abritAxis));
            renderSegment();

            popMatrix();
        }

        mvMatrix = mult(mvMatrix, translate(x, y, z));

        mvMatrix = mult(mvMatrix, rotateZ(frame[offset + zRot]));
        mvMatrix = mult(mvMatrix, rotateY(frame[offset + yRot]));
        mvMatrix = mult(mvMatrix, rotateX(frame[offset + xRot]));

        pushMatrix();
        if (node.name === "Head") {
            mvMatrix = mult(mvMatrix, scalem(1.2, 1.7, 1.2));
        } else {
            mvMatrix = mult(mvMatrix, scalem(.5, .5, .5));
        }
        renderSphere();
        popMatrix();

        renderChildNode(node.children[i], frame);
        popMatrix();
    }
}

function mag(u) {
    return Math.sqrt(Math.pow(u[0], 2) + Math.pow(u[1], 2) + Math.pow(u[2], 2));
}

var Vec4Position = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.h = 1.0;
};

var LineProgram = function () {
    this.program = initShaders(gl, "line-vshader", "line-fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    this.colorLoc = gl.getAttribLocation(this.program, "vColor");

    this.mvMatrixLoc = gl.getUniformLocation(this.program, "mvMatrix");
    this.pMatrixLoc = gl.getUniformLocation(this.program, "pMatrix");
    this.nMatrixLoc = gl.getUniformLocation(this.program, "nMatrix");
};

var SphereProgram = function () {
    this.program = initShaders(gl, "sphere-vshader", "sphere-fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    this.normalLoc = gl.getAttribLocation(this.program, "vNormal");
    this.colorLoc = gl.getAttribLocation(this.program, "vColor");

    this.mvMatrixLoc = gl.getUniformLocation(this.program, "mvMatrix");
    this.pMatrixLoc = gl.getUniformLocation(this.program, "pMatrix");
    this.nMatrixLoc = gl.getUniformLocation(this.program, "nMatrix");
};

var LinesProgram = function () {
    this.program = initShaders(gl, "lines-vshader", "lines-fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    this.colorLoc = gl.getAttribLocation(this.program, "vColor");
};

function renderAxis() {
    gl.useProgram(lineProgram.program);

    gl.enableVertexAttribArray(lineProgram.vertexLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, axis.vertexBuffer);
    gl.vertexAttribPointer(lineProgram.vertexLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(lineProgram.colorLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, axis.colorBuffer);
    gl.vertexAttribPointer(lineProgram.colorLoc, 4, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(lineProgram.mvMatrixLoc, false, flatten(mvMatrix));
    gl.uniformMatrix4fv(lineProgram.pMatrixLoc, false, flatten(pMatrix));

    gl.drawArrays(gl.LINES, 0, axis.numPoints);
}

function renderFloor() {
    gl.useProgram(lineProgram.program);

    gl.enableVertexAttribArray(lineProgram.vertexLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, floor.vertexBuffer);
    gl.vertexAttribPointer(lineProgram.vertexLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(lineProgram.colorLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, floor.colorBuffer);
    gl.vertexAttribPointer(lineProgram.colorLoc, 4, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(lineProgram.mvMatrixLoc, false, flatten(mvMatrix));
    gl.uniformMatrix4fv(lineProgram.pMatrixLoc, false, flatten(pMatrix));

    gl.drawArrays(gl.LINES, 0, floor.numPoints);
}

function renderSegment() {
    gl.useProgram(lineProgram.program);

    gl.enableVertexAttribArray(lineProgram.vertexLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, segment.vertexBuffer);
    gl.vertexAttribPointer(lineProgram.vertexLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(lineProgram.colorLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, segment.colorBuffer);
    gl.vertexAttribPointer(lineProgram.colorLoc, 4, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(lineProgram.mvMatrixLoc, false, flatten(mvMatrix));
    gl.uniformMatrix4fv(lineProgram.pMatrixLoc, false, flatten(pMatrix));
    //

    gl.drawArrays(gl.LINES, 0, segment.numPoints);
}

function renderSphere() {
    gl.useProgram(sphereProgram.program);
    //
    gl.enableVertexAttribArray(sphereProgram.vertexLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, sphere.vertexBuffer);
    gl.vertexAttribPointer(sphereProgram.vertexLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(sphereProgram.normalLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, sphere.normalBuffer);
    gl.vertexAttribPointer(sphereProgram.normalLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(sphereProgram.colorLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, sphere.colorBuffer);
    gl.vertexAttribPointer(sphereProgram.colorLoc, 4, gl.FLOAT, false, 0, 0);

    nMatrix = normalMatrix(mvMatrix, false);

    gl.uniformMatrix4fv(sphereProgram.mvMatrixLoc, false, flatten(mvMatrix));
    gl.uniformMatrix4fv(sphereProgram.pMatrixLoc, false, flatten(pMatrix));
    gl.uniformMatrix4fv(sphereProgram.nMatrixLoc, false, flatten(nMatrix));

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sphere.indexBuffer);
    gl.drawElements(gl.TRIANGLES, sphere.numIndices, gl.UNSIGNED_SHORT, 0);
}


/**
 * Parses a BVH file and places the result in the bvh variable.
 */
function parse(input) {
    var antlr4 = require('antlr4/index');
    var BVHLexer = require('parser/BVHLexer');
    var BVHListener = require('parser/BVHListener');
    var BVHParser = require('parser/BVHParser');
    require('./BVH');

    var chars = new antlr4.InputStream(input);
    var lexer = new BVHLexer.BVHLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new BVHParser.BVHParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.mocap();

    bvh = new BVH();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(bvh, tree);

    // TODO: add any initialization code upon loading a BVH file
    console.log(bvh);
}


function keyDown(e) {

    switch (e.keyCode) {
        case 37:
            // left
            angle--;
            break;
        case 38:
            // up
            fieldOfView = fieldOfView <= 0.0 ? 0.0 : fieldOfView - 1;
            break;
        case 39:
            // right
            angle++;
            break;
        case 40:
            // down
            fieldOfView = fieldOfView >= 100.0 ? 100.0 : fieldOfView + 1;
            break;
        case 32:
            isPaused = !isPaused;
            break;
        case "F".charCodeAt(0):
            // F or f
            break;
        default:
            // To see what the code for a certain key is, uncomment this line,
            // reload the page in the browser and press the key.
            // console.log("Unrecognized key press: " + e.keyCode);
            break;
    }
}

function kungFu() {
    playAudio("Song/KungFu.mp3");
    // parse(file.open());
    parse(kungFu1);
}


window.onload = function init() {
    document.onkeydown = keyDown;

    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    gl.viewport(0, 0, canvas.width, canvas.height);

    aspect = canvas.width / canvas.height;

    gl.clearColor(0.5, 0.5, 0.5, 1.0);

    gl.enable(gl.DEPTH_TEST);

    axis = new Axis();
    floor = new Floor();
    sphere = new Sphere(1, 20, 20);

    lineBufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBufferId);

    lineColorBufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineColorBufferId);


    //  Load shaders and initialize attribute buffers
    lineProgram = new LineProgram();
    sphereProgram = new SphereProgram();
    segment = new Segment();

    //
    // Listen for a file to be loaded and parse
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        if (file && file.name) {
            if (file.name.match(/.*\.bvh/)) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    parse(reader.result);
                    frameNumber = 0;
                    render();
                    if (audio) {
                        audio.pause();
                    }
                };
                reader.readAsText(file);
            } else {
                console.log("File not supported! " + file.type);
            }
        }
    });

    // // Parse a default file.
    // // TODO: change this to testData1 when you're ready to start rendering
    // // animation. These strings are defined in test1.bvh.js and test2.bvh.js.
    parse(testData1);

    render();
};
