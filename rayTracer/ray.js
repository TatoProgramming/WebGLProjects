"use strict";

var canvas;
var canvasWidth, canvasHeight;
var gl;

var program;
var square;

var mvMatrix, pMatrix, nMatrix;

var texture;

var lastTick = Date.now();
var deltaTime;
var time = 0.0;

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
        vec4(1, 1, 0.0, 1.0),
    ];

    this.numVertices = this.vertices.length;

    this.vertexColors = [
        vec4(1.0, 1.0, 1.0, 1.0),  // white
        vec4(1.0, 0.0, 0.0, 1.0),  // red
        vec4(0.0, 1.0, 0.0, 1.0),  // green
        vec4(0.0, 0.0, 1.0, 1.0),  // blue
    ];

    this.texCoords = [
        vec2(0, 0),
        vec2(1, 0),
        vec2(0, 1),
        vec2(1, 1),
    ];

};

function configureTexture(image){
    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, canvasWidth, canvasHeight, 0, gl.RGB,
        gl.UNSIGNED_BYTE, image);
    // gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB,
    //               gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
        gl.NEAREST_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.uniform1i(gl.getUniformLocation(program.program, "texture"), 0);
}

var Program = function(){
    this.program = initShaders(gl, "vshader", "fshader");
    gl.useProgram(this.program);

    this.vertexLoc = gl.getAttribLocation(this.program, "vPosition");
    this.colorLoc = gl.getAttribLocation(this.program, "vColor");
    // this.texCoordLoc = gl.getAttribLocation(this.program, "vTexCoord");
    //
    // this.filterLoc = gl.getUniformLocation(this.program, "filter");

    this.mvMatrixLoc = gl.getUniformLocation(this.program, "mvMatrix");
    this.pMatrixLoc = gl.getUniformLocation(this.program, "pMatrix");
    // this.nMatrixLoc = gl.getUniformLocation(this.program, "nMatrix");
    this.timeLoc = gl.getUniformLocation(this.program, "time");
    this.resolutionLoc = gl.getUniformLocation(this.program, "resolution");
};

function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i = 0; i < vars.length; i++){
        var pair = vars[i].split("=");
        if(pair[0] == variable){
            return pair[1];
        }
    }
    return (false);
}

// function capture(canvas) {
//   var name = Math.random(); // File name doesn't matter
//   var image = canvas.toDataURL('image/png').slice(22);
//   fs.root.getFile(name, {create: true}, function (entry) {
//     entry.createWriter(function (writer) {
//       // Convert base64 to binary without UTF-8 mangling.
//       var data = atob(image);
//       var buf = new Uint8Array(data.length);
//       for (var i = 0; i < data.length; ++i) {
//         buf[i] = data.charCodeAt(i);
//       }

//       // Write data
//       var blob = new Blob([buf], {});
//       writer.seek(0);
//       writer.write(blob);

//       console.log('Writing file', frames, blob.size);

//       setTimeout(function () {
//         // Resume rendering
//         callback();
//       }, 66);
//     });
//   }, function () { console.log('File error', arguments); });
// }

// function saveImage(e) {
//   var f = e.target.files[0]; 
//   if (f) {
//     f.createWriter(function(writer) {
//       console.log("save file " + f);
//     });
//   }
//   // var myImage = new Image(100, 200);
//   // myImage.src = 'picture.jpg';
//   // console.log(myImage);
// }

window.onload = function init(){
    canvas = document.getElementById("gl-canvas");
    // document.getElementById("choose-file").addEventListener(
    //   'change', saveImage, false);

    // var requestedBytes = 1024*1024*280;
    // navigator.webkitPersistentStorage.requestQuota(
    //   requestedBytes, function(grantedBytes) {
    //     console.log('we were granted ', grantedBytes, 'bytes');
    //   }, function(e) { console.log('Error', e); }
    // );

    // capture(canvas);

    gl = WebGLUtils.setupWebGL(canvas);
    if(!gl){
        alert("WebGL isn't available");
    }

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    gl.enable(gl.DEPTH_TEST);


    //
    //  Load shaders and initialize attribute buffers
    //
    program = new Program();
    gl.useProgram(program.program);

    square = new Square();

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(square.vertices), gl.STATIC_DRAW);

    gl.vertexAttribPointer(program.vertexLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(program.vertexLoc);

    // var cBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, flatten(square.vertexColors), gl.STATIC_DRAW);
    //
    // gl.vertexAttribPointer(program.colorLoc, 4, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(program.colorLoc);

    // var tBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer);
    // gl.bufferData(gl.ARRAY_BUFFER, flatten(square.texCoords), gl.STATIC_DRAW);
    //
    // gl.vertexAttribPointer(program.texCoordLoc, 2, gl.FLOAT, false, 0, 0);
    // gl.enableVertexAttribArray(program.texCoordLoc);

    // Initialize texture
    var w = canvasWidth;
    var h = canvasHeight;
    var buffer = new ArrayBuffer(w * h * 3 * 4);
    // for (var x = 0; x < w; ++x) {
    //   for (var y = 0; y < h; ++y) {
    //     buffer[(x + y*w)*3+0] = (x/w);
    //     buffer[(x + y*w)*3+1] = (1-x/w);
    //     buffer[(x + y*w)*3+2] = (y/w);
    //   }
    // }

    // Get the increment value
    var resln = getQueryVariable("resln");
    var inc = 1;
    if(resln != false)
        inc = Number(resln);

    // Get test pattern
    var testPattern = getQueryVariable("test");

    // Get window
    var view = [-1, -1, 2, 2];
    var swindow = getQueryVariable("window");
    if(swindow != false){
        var m = swindow.match(/-?(0\.)?[0-9]+/gi);
        for(var i = 0; i < 4; ++i){
            view[i] = Number(m[i]);
        }
    }
    var nview = [Math.floor(((view[0] + 1) / 2.0) * w),
        Math.floor(((view[1] + 1) / 2.0) * h),
        Math.floor((view[2] / 2.0) * w),
        Math.floor((view[3] / 2.0) * h)];
    for(var i = 0; i < 2; ++i){
        nview[i] = nview[i] - nview[i] % inc;
    }
    for(var x = nview[0]; x < nview[0] + nview[2]; x += inc){
        for(var y = nview[1]; y < nview[1] + nview[3]; y += inc){
            var px = (x / w) * 2 - 1;
            var py = (y / h) * 2 - 1;
            var c;
            if(testPattern != false){
                c = getColorTestPattern(px, py);
            }else{
                c = getColor(px, py);
            }
            buffer[Math.floor(x + y * w) * 3 + 0] = c[0];
            buffer[Math.floor(x + y * w) * 3 + 1] = c[1];
            buffer[Math.floor(x + y * w) * 3 + 2] = c[2];
        }
    }

    if(inc > 1){
        for(var x = 0; x < w; x += inc){
            for(var y = 0; y < h; y += inc){
                var r = buffer[(x + y * w) * 3 + 0];
                var g = buffer[(x + y * w) * 3 + 1];
                var b = buffer[(x + y * w) * 3 + 2];
                for(var x_ = 0; x_ < inc; ++x_){
                    for(var y_ = 0; y_ < inc; ++y_){
                        buffer[((x + x_) + (y + y_) * w) * 3 + 0] = buffer[(x + y * w) * 3 + 0];
                        buffer[((x + x_) + (y + y_) * w) * 3 + 1] = buffer[(x + y * w) * 3 + 1];
                        buffer[((x + x_) + (y + y_) * w) * 3 + 2] = buffer[(x + y * w) * 3 + 2];
                    }
                }
            }
        }
    }

    var b = new ArrayBuffer(w * h * 3);
    var image = new Uint8Array(b);
    for(var i = 0; i < image.length; ++i){
        image[i] = buffer[i] * 255;
    }

    // configureTexture(image);

    render();
};

var render = function(){
    updateTime();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    pMatrix = ortho(-1, 1, -1, 1, -1, 1);
    gl.uniformMatrix4fv(program.pMatrixLoc, false, flatten(pMatrix));
    //
    mvMatrix = mat4(1.0);
    gl.uniformMatrix4fv(program.mvMatrixLoc, false, flatten(mvMatrix));

    gl.uniform1f(program.timeLoc, time); // TODO: 11/7/2017 add time and delta time

    var resolution = vec2(gl.canvas.width, gl.canvas.height);
    gl.uniform2fv(program.resolutionLoc, flatten(resolution));

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, square.numVertices);
    requestAnimFrame(render);
};

function updateTime(){
    var now = Date.now();
    deltaTime = (now - lastTick) / 1000;
    lastTick = now;
    time += deltaTime;
}

// // Request 40 GB (should be enough for ~5 minutes of 1080p)
// var bytes = 1024*1024*1024*40;
// window.webkitStorageInfo.requestQuota(
//   PERSISTENT, bytes, function(grantedBytes) {
//     console.log('Got storage', grantedBytes);
//     window.webkitRequestFileSystem(PERSISTENT, grantedBytes, function (fs) {
//       window.fs = fs;
//       console.log("Got filesystem");
//     });
//   }, function(e) {
//     console.log('Storage error', e);
//   });

function capture(canvas){//, callback) {
    var name = Math.random(); // File name doesn't matter
    var image = canvas.toDataURL('image/png').slice(22);
    fs.root.getFile(name, { create: true }, function(entry){
        entry.createWriter(function(writer){
            // Convert base64 to binary without UTF-8 mangling.
            var data = atob(image);
            var buf = new Uint8Array(data.length);
            for(var i = 0; i < data.length; ++i){
                buf[i] = data.charCodeAt(i);
            }

            // Write data
            var blob = new Blob([buf], {});
            writer.seek(0);
            writer.write(blob);

            console.log('Writing file', frames, blob.size);

            // setTimeout(function () {
            //   // Resume rendering
            //   // callback();
            // }, 66);
        });
    }, function(){
        console.log('File error', arguments);
    });
}

// var fs = require('fs');
// var path = "/Users/edwajohn/Library/Application Support/Google/Chrome/Default/File System/009/p/";
// var first = 0;
// var last = 9899;
// var j = 0;

// for (var i = first; i <= last; ++i) {
//   var subdir = ("00" + Math.floor(i / 100)).slice(-2);
//   var file = path + subdir + '/' + ("000000000" + i).slice(-8);
//   var target = './file' + ("00000000" + (++j)).slice(-8);
//   console.log(file, target + '.png');
//   fs.renameSync(file, target + '.png');
// }
