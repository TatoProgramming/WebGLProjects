/**
 * Created by Taylor on 10/19/2017.
 */
"use strict";
var showSkybox = true;
var defaultParameters = {
    "inc": 0.05,
    "max": 5,
    "offset": 0.01,
    "coeff1": 0.5,
    "coeff2": 0.25,
    "power": 3,
    "seed": Math.random()
};

var canvas;
var gl;

// Camera settings
var cameraZoom = 1;
var aspect = 1.0;
var angle = 0;
var fieldOfView = 50.0;
const near = 0.01;
const far = 100;
const radius = 5;
const at = scale(0.01, vec3(0.0, 0.0, 0.0));
var up = vec3(0.0, 1.0, 0.0);

// shapes
var axis;
var segment;
var cube;
var water;
var terrain;

// day/night
var nightIntensity = vec3(0.1, 0.1, 0.7);
var dayIntensity = vec3(0.7, 0.7, 0.7);
var sunlightDirection = vec3(-0.75, 1.0, -1.0);
var sunlightIntensity = dayIntensity;
var isDay = true;
var sunAngle = 0;

// gl stuff
var terrainProgram, lineProgram, cubeProgram, waterProgram;
var vPosition;
var mvMatrix, pMatrix;
var rotationMatrix = mat4();
var nMatrix; //= vec4();
var matrixStack = [];

//water
var animationSize;
var currentAnimation;
var startFrame = 0;
var endFrame = 0;
var loopNum = 10;

// time
var lastTick = Date.now();
var deltaTime;
var time = 0;

var mouseIsDown = false;
var lastMousePosX, lastMousePosY, currentMouseX, currentMouseY;

var eye = vec3(radius * Math.sin(0),
    radius * Math.sin(radians(10.0)),
    radius * Math.cos(0));

function pushMatrix(){
    matrixStack.push(mat4(mvMatrix));
}

function popMatrix(){
    mvMatrix = matrixStack.pop();
}

function getVector(x, y){
    var vec = vec3(x, y, 1.0);
    var z = Math.sqrt(x * x + y * y);

    if(z < 1){
        vec[2] = z;
    }
    return normalize(vec)
}

var setCamera = function(){
    var vecB = getVector(lastMousePosX, lastMousePosY);
    var vecA = getVector(currentMouseX, currentMouseY);
    var origin = vec3(0, 0, 0);

    vecA = subtract(origin, vecA);
    vecB = subtract(origin, vecB);
    // vecA = normalize(vecA);
    // vecB = normalize(vecB);

    var dotP = dot(vecA, vecB);
    var angleBetween = Math.acos(dotP);
    var arbitAxis = cross(vecB, vecA);

    // console.log("Axis:" + arbitAxis);

    if(length(arbitAxis) !== 0){
        var rotateMatrix = rotate(angleBetween, arbitAxis);
        rotationMatrix = mult(rotationMatrix, rotateMatrix);
        mvMatrix = mult(mvMatrix, rotateMatrix);
    }
};

// TODO: improve the day/night animation
// FIXME: Fix idea: to fix this have the sunrise/set and moonrise/set to increase in
// FIXME: intensity as it goes from 0 to pi/6 (some value) and decrease in intensity
// FIXME: as it goes from 5pi/6 (some value) to pi
function getSunlightPosition(){
    sunAngle += deltaTime * 0.1 ;

    var x = Math.cos(sunAngle);
    var y = Math.sin(sunAngle);

    var direction = subtract(vec3(0.0, 0.0, 0.0), (vec3(x, y, 0.0)));
    direction[2] = sunlightDirection[2];
    return direction;
}

var updateTime = function(){
    var now = Date.now();
    deltaTime = (now - lastTick) / 1000;
    lastTick = now;
};

function render(){
    updateTime();

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    pushMatrix();
    mvMatrix = mult(mvMatrix, scalem(cameraZoom, cameraZoom, cameraZoom));

    gl.disable(gl.BLEND);
    if(showSkybox){
        pushMatrix();
        mvMatrix = mult(mvMatrix, scalem(40, 40, 40));
        renderCube();
        popMatrix();
    // }else{
    //     console.log(showSkybox);
        // sunlightDirection = getSunlightPosition();
    }

    // renderAxis();
    renderTerrain();

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    renderWater();

    popMatrix();

    requestAnimFrame(render);
}

var LineProgram = function(){
    this.program = initShaders(gl, "line-vshader", "line-fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    this.colorLoc = gl.getAttribLocation(this.program, "vColor");

    this.mvMatrixLoc = gl.getUniformLocation(this.program, "mvMatrix");
    this.pMatrixLoc = gl.getUniformLocation(this.program, "pMatrix");
    this.nMatrixLoc = gl.getUniformLocation(this.program, "nMatrix");
};

var CubeProgram = function(){
    this.program = initShaders(gl, "cube-vshader", "cube-fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    // this.normalLoc = gl.getAttribLocation(this.program, "vNormal");
    this.colorLoc = gl.getAttribLocation(this.program, "vColor");
    this.vTexCoord = gl.getAttribLocation(this.program, "vTexCoord");

    this.mvMatrixLoc = gl.getUniformLocation(this.program, "mvMatrix");
    this.pMatrixLoc = gl.getUniformLocation(this.program, "pMatrix");
    // this.nMatrixLoc = gl.getUniformLocation(this.program, "nMatrix");
};

var TerrainProgram = function(){
    this.program = initShaders(gl, "terrain-vshader", "terrain-fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    this.normalLoc = gl.getAttribLocation(this.program, "vNormal");
    this.colorLoc = gl.getAttribLocation(this.program, "vColor");

    this.mvMatrixLoc = gl.getUniformLocation(this.program, "mvMatrix");
    this.pMatrixLoc = gl.getUniformLocation(this.program, "pMatrix");
    this.nMatrixLoc = gl.getUniformLocation(this.program, "nMatrix");
    this.sunlightDirection = gl.getUniformLocation(this.program, "sunlightDirection");
    this.sunlightIntensity = gl.getUniformLocation(this.program, "sunlightIntensity");

    this.isWaterLoc = gl.getUniformLocation(this.program, "isWater");
    this.uColor = gl.getUniformLocation(this.program, "uColor");
};

var WaterProgram = function(){
    this.program = initShaders(gl, "terrain-vshader", "terrain-fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    this.normalLoc = gl.getAttribLocation(this.program, "vNormal");

    this.mvMatrixLoc = gl.getUniformLocation(this.program, "mvMatrix");
    this.pMatrixLoc = gl.getUniformLocation(this.program, "pMatrix");

    this.isWaterLoc = gl.getUniformLocation(this.program, "isWater");
    this.uColor = gl.getUniformLocation(this.program, "uColor");
};

function renderAxis(){
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

function renderCube(){
    gl.useProgram(cubeProgram.program);

    gl.enableVertexAttribArray(cubeProgram.vertexLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, cube.vertexBuffer);
    gl.vertexAttribPointer(cubeProgram.vertexLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(cubeProgram.colorLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, cube.colorBuffer);
    gl.vertexAttribPointer(cubeProgram.colorLoc, 4, gl.FLOAT, false, 0, 0);

    // gl.enableVertexAttribArray(cubeProgram.vTexCoord);
    // gl.bindBuffer(gl.ARRAY_BUFFER, cube.textureBuffer);
    // gl.vertexAttribPointer(cubeProgram.vTexCoord, 2, gl.FLOAT, false, 0, 0);

    gl.uniformMatrix4fv(cubeProgram.mvMatrixLoc, false, flatten(mvMatrix));
    gl.uniformMatrix4fv(cubeProgram.pMatrixLoc, false, flatten(pMatrix));

    gl.uniform1i(gl.getUniformLocation(cubeProgram.program, "texMap"), 0);

    gl.drawArrays(gl.TRIANGLES, 0, cube.numPoints);
}

function renderTerrain(){
    gl.useProgram(terrainProgram.program);

    gl.enableVertexAttribArray(terrainProgram.vertexLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, terrain.vertexBuffer);
    gl.vertexAttribPointer(terrainProgram.vertexLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(terrainProgram.normalLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, terrain.normalBuffer);
    gl.vertexAttribPointer(terrainProgram.normalLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(terrainProgram.colorLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, terrain.colorBuffer);
    gl.vertexAttribPointer(terrainProgram.colorLoc, 4, gl.FLOAT, false, 0, 0);

    nMatrix = normalMatrix(mvMatrix, false);

    gl.uniformMatrix4fv(terrainProgram.mvMatrixLoc, false, flatten(mvMatrix));
    gl.uniformMatrix4fv(terrainProgram.pMatrixLoc, false, flatten(pMatrix));
    gl.uniform3fv(terrainProgram.sunlightDirection, flatten(sunlightDirection));
    gl.uniform3fv(terrainProgram.sunlightIntensity, flatten(sunlightIntensity));
    gl.uniform1i(terrainProgram.isWaterLoc, 0);

    // gl.drawArrays(gl.LINES, 0, terrain.numVertices);
    gl.drawArrays(gl.TRIANGLES, 0, terrain.numVertices);
}

function renderWater(){
    gl.useProgram(terrainProgram.program);

    gl.enableVertexAttribArray(terrainProgram.vertexLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, water.vertexBuffer);
    gl.vertexAttribPointer(terrainProgram.vertexLoc, 4, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(terrainProgram.normalLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, water.normalBuffer);
    gl.vertexAttribPointer(terrainProgram.normalLoc, 4, gl.FLOAT, false, 0, 0);

    nMatrix = normalMatrix(mvMatrix, false);

    gl.uniformMatrix4fv(terrainProgram.mvMatrixLoc, false, flatten(mvMatrix));
    gl.uniformMatrix4fv(terrainProgram.pMatrixLoc, false, flatten(pMatrix));

    gl.uniform3fv(terrainProgram.sunlightDirection, flatten(sunlightDirection));
    gl.uniform3fv(terrainProgram.sunlightIntensity, flatten(sunlightIntensity));

    gl.uniform1i(terrainProgram.isWaterLoc, 1);
    gl.uniform4fv(terrainProgram.uColor, flatten(water.uColor));

    // console.log(water.numVertices);
    gl.drawArrays(gl.TRIANGLES, 0, water.numVertices);
}

var cameraZoomOut = function(){
    var maxZoom = 0.05;
    cameraZoom -= 0.02;
    if(cameraZoom <= maxZoom){
        cameraZoom = maxZoom;
    }
};

var cameraZoomIn = function(){
    var minZoom = 3.0;
    cameraZoom += 0.02;
    if(cameraZoom >= minZoom){
        cameraZoom = minZoom;
    }
};

function keyDown(e){
    switch(e.keyCode){
        case 37:
            // left
            // angle--;
            break;
        case 38:
            // up
            cameraZoomIn();
            break;
        case 39:
            // right
            // angle++;
            break;
        case 40:
            // down
            cameraZoomOut();
            break;
        case 32:
            //space
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

function setCanvasEvents(){
    canvas.addEventListener("mousedown", function(event){
        mouseIsDown = true;
        var mousePos = getMousePosition(event);
        pushMatrix();

        currentMouseX = lastMousePosX = mousePos.x;
        currentMouseY = lastMousePosY = mousePos.y;
        // console.log("Mouse is down: " + mouseIsDown);
    });

    canvas.addEventListener("mouseup", function(event){
        mouseIsDown = false;
        // lastMousePosX = 0;
        // lastMousePosY = 0;
        popMatrix();
        mvMatrix = mult(mvMatrix, rotationMatrix);
        rotationMatrix = mat4();
        // console.log("Mouse is down" + mouseIsDown);
    });

    canvas.addEventListener("mousemove", function(event){
        if(mouseIsDown){
            var mousePos = getMousePosition(event);
            currentMouseX = mousePos.x;
            currentMouseY = mousePos.y;

            setCamera();
        }
    });

    canvas.addEventListener("wheel", function(event){
        if(event.deltaY > 0){
            cameraZoomOut();
        }else{
            cameraZoomIn();
        }
    });
}

window.onload = function init(){
    document.onkeydown = keyDown;

    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if(!gl){
        alert("WebGL isn't available");
    }

    gl.viewport(0, 0, canvas.width, canvas.height);

    aspect = canvas.width / canvas.height;

    setCanvasEvents();

    gl.clearColor(0.8, 1.0, 1.0, 1.0);

    gl.enable(gl.DEPTH_TEST);

    cube = new Cube();
    axis = new Axis();
    terrain = new MountainTerrain(defaultParameters);
    water = new Water(0.05, 5, -0.06, vec4(0.0, 0.0, 1.0, 1.0));

    terrainProgram = new TerrainProgram();
    lineProgram = new LineProgram();
    cubeProgram = new CubeProgram();
    // waterProgram = new WaterProgram();

    pMatrix = perspective(fieldOfView, aspect, near, far);

    mvMatrix = lookAt(eye, at, up);

    updateDisplay();
    render();
};

function getMousePosition(event){
    var mouseX = (event.offsetX / gl.canvas.width) * 2 - 1;
    var mouseY = (event.offsetY / gl.canvas.height) * 2 - 1;

    return { "x": mouseX, "y": -mouseY };
}

function updateTerrain(){
    getParameters();
    updateDisplay();
    terrain = new MountainTerrain(defaultParameters);
}

function getParameters(){
    var isChecked = document.getElementById("random").checked;
    if(isChecked){
        defaultParameters.seed = Math.random();
    }else{
        defaultParameters.seed = parseFloat(document.getElementById("seed").value);
    }
    defaultParameters.inc = parseFloat(document.getElementById("inc").value);
    defaultParameters.offset = parseFloat(document.getElementById("offset").value);
    defaultParameters.coeff1 = parseFloat(document.getElementById("coeff1").value);
    defaultParameters.coeff2 = parseFloat(document.getElementById("coeff2").value);
    defaultParameters.power = parseFloat(document.getElementById("power").value);
}

function updateDisplay(){
    document.getElementById("seed").value = defaultParameters.seed;
    document.getElementById("inc").value = defaultParameters.inc;
    document.getElementById("offset").value = defaultParameters.offset;
    document.getElementById("coeff1").value = defaultParameters.coeff1;
    document.getElementById("coeff2").value = defaultParameters.coeff2;
    document.getElementById("power").value = defaultParameters.power;
}

function toggleSkybox(element){
    if(element.innerText.indexOf("off") > 0){
        element.innerText = element.innerText.replace("off", "on")
    }else{
        element.innerText = element.innerText.replace("on", "off")
    }
    // console.log(element.innerText);
    showSkybox = !showSkybox;
}



