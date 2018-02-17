"use strict";

var canvas;
var canvasWidth, canvasHeight;
var gl;

var program;
var square;

var lastTick = Date.now();
var deltaTime;
var time = 0.0;

var mode = 2;

var Square = function(){

    //  2           3
    //   *---------*
    //   |         |
    //   |         |
    //   |         |
    //   *---------*
    //  0           1

    this.vertices = [
        vec4(-1, -1, 0.0, 1.0),
        vec4(1, -1, 0.0, 1.0),
        vec4(-1, 1, 0.0, 1.0),
        vec4(1, 1, 0.0, 1.0)
    ];

    this.numVertices = this.vertices.length;

    this.vertexColors = [
        vec4(1.0, 1.0, 1.0, 1.0),  // white
        vec4(1.0, 0.0, 0.0, 1.0),  // red
        vec4(0.0, 1.0, 0.0, 1.0),  // green
        vec4(0.0, 0.0, 1.0, 1.0)  // blue
    ];
};

var Program = function(){
    this.program = initShaders(gl, "vshader", "fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");

    this.timeLoc = gl.getUniformLocation(this.program, "time");
    this.mode = gl.getUniformLocation(this.program, "mode");
    this.resolutionLoc = gl.getUniformLocation(this.program, "resolution");
};


window.onload = function init(){
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if(!gl){
        alert("WebGL isn't available");
    }

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    gl.enable(gl.DEPTH_TEST);

    //  Load shaders and initialize attribute buffers
    program = new Program();
    gl.useProgram(program.program);

    square = new Square();

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(square.vertices), gl.STATIC_DRAW);

    gl.vertexAttribPointer(program.vertexLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(program.vertexLoc);

    render();
};

var render = function(){
    updateTime();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniform1f(program.timeLoc, time); // TODO: 11/7/2017 add time and delta time

    var resolution = vec2(gl.canvas.width, gl.canvas.height);
    gl.uniform2fv(program.resolutionLoc, flatten(resolution));

    gl.uniform1i(program.mode, mode);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, square.numVertices);
    requestAnimFrame(render);
};

function changeMode(select){
    mode = parseInt(select.value);
    time = 0.0;
    console.log("Mode changed: " + mode + " time reset")
}

function updateTime(){
    var now = Date.now();
    deltaTime = (now - lastTick) / 1000;
    lastTick = now;
    time += deltaTime;
}
