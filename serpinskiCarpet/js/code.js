/**
 * Created by Taylor on 8/23/2017.
 */
var gl;
var canvasWidth, canvasHeight;
var bufferId;
var colorBufferId;
var vertices = [];
var colors = [];
var fullScreen = false;
var button = false;
var oneThird = 1 / 3;
var twoThird = 2 / 3;
var numberOfIteration = 0;
var a = vec2(-2, -2);    //a
var b = vec2(2, -2);     //d
var c = vec2(-2, 2);     //m
var f = vec2(2, 2);     //p

/**
 * Renders the lines
 */
function render() {
    vertices = [];
    divideSquare(a, b, c, f, numberOfIteration);
    scaleVertices(0.5, vertices);

    gl.clear(gl.COLOR_BUFFER_BIT);

    //  send to points to the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    if (button) {
        gl.drawArrays(gl.POINTS, 0, vertices.length);
    } else {
        gl.drawArrays(gl.TRIANGLES, 0, vertices.length);
    }
}

function test() {
    button = !button;
    render();
}

function selectionChange(element) {
    numberOfIteration = parseInt(element.value);
    console.log(numberOfIteration);
    render();
}


window.onload = function init() {
    var canvas = document.getElementById("gl-canvas");

    if (fullScreen) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL is not available!");
    }

    // Configures
    gl.viewport(0, 0, canvasWidth, canvasHeight);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    render();
};

function topRightSquare(k, l, p, o) {
    vertices.push(k);
    vertices.push(l);
    vertices.push(p);

    vertices.push(k);
    vertices.push(o);
    vertices.push(p);
}

function middleRightSquare(g, h, l, k) {
    vertices.push(g);
    vertices.push(h);
    vertices.push(l);

    vertices.push(g);
    vertices.push(k);
    vertices.push(l);
}

function bottomLeftSquare(a, b, f, e) {
    vertices.push(a);
    vertices.push(b);
    vertices.push(f);

    vertices.push(a);
    vertices.push(e);
    vertices.push(f);
}

function middleLeftSquare(e, f, j, i) {
    vertices.push(e);
    vertices.push(f);
    vertices.push(j);

    vertices.push(e);
    vertices.push(i);
    vertices.push(j);
}

function topLeftSquare(i, j, n, m) {
    vertices.push(i);
    vertices.push(j);
    vertices.push(n);

    vertices.push(i);
    vertices.push(m);
    vertices.push(n);
}

function bottomMiddleSquare(b, c, g, f) {
    vertices.push(b);
    vertices.push(c);
    vertices.push(g);

    vertices.push(b);
    vertices.push(f);
    vertices.push(g);
}

function topMiddleSquare(j, k, o, n) {
    vertices.push(j);
    vertices.push(k);
    vertices.push(o);

    vertices.push(j);
    vertices.push(n);
    vertices.push(o);
}

function bottomRightSquare(c, d, h, g) {
    vertices.push(c);
    vertices.push(d);
    vertices.push(h);

    vertices.push(c);
    vertices.push(g);
    vertices.push(h);
}


/*
 m------------n------------o------------p
 |            |            |            |
 |            |            |            |
 |     tl     |     tm     |     tr     |
 |            |            |            |
 |            |            |            |
 i------------j------------k------------l
 |            |            |            |
 |            |            |            |
 |     ml     |      m     |     mr     |
 |            |            |            |
 |            |            |            |
 e------------f------------g------------h
 |            |            |            |
 |            |            |            |
 |     bl     |     bm     |     br     |
 |            |            |            |
 |            |            |            |
 a------------b------------c------------d
 */
function divideSquare(a, d, m, p, count) {

    // calculate the points
    var b = mix(a, d, oneThird);
    var c = mix(a, d, twoThird);
    var e = mix(a, m, oneThird);
    var f = vec2(b[0], e[1]);
    var g = vec2(c[0], e[1]);
    var h = mix(d, p, oneThird);
    var i = mix(a, m, twoThird);
    var j = vec2(b[0], i[1]);
    var k = vec2(c[0], i[1]);
    var l = mix(d, p, twoThird);
    var n = mix(m, p, oneThird);
    var o = mix(m, p, twoThird);

    if (count === 0) {
        bottomLeftSquare(a, b, f, e);
        middleLeftSquare(e, f, j, i);
        topLeftSquare(i, j, n, m);
        bottomMiddleSquare(b, c, g, f);
        topMiddleSquare(j, k, o, n);
        bottomRightSquare(c, d, h, g);
        middleRightSquare(g, h, l, k);
        topRightSquare(k, l, p, o);
    } else {
        --count;
        divideSquare(a, b, e, f, count);
        divideSquare(b, c, f, g, count);
        divideSquare(c, d, g, h, count);
        divideSquare(a, b, e, f, count);
        divideSquare(e, f, i, j, count);
        divideSquare(g, h, k, l, count);
        divideSquare(i, j, m, n, count);
        divideSquare(j, k, n, o, count);
        divideSquare(k, l, o, p, count);
    }
}
