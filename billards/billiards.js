"use strict";
//------------------------------------------------------------
// Global variables
//------------------------------------------------------------

// Feature Idea: Have a course prediction for the white ball so that you can do cool shots
// Feature Idea: balls explode into to pixels after getting it into the hole

var gl;
var circle; // the circle obj with the vertices
var cue;

var ballBufferId;
var tableBufferId;
var vectorLinesBufferId;
var cueBuffferId;

var line = [vec2(0, 0), vec2(0, 0.5)];

var mvMatrixLoc;
var uColor;
var vPosition;
var vectorLines = [];

var deltaTime;
var lastUpdate;
var program;

var initMousePosition;
var debugMode = false;

var pulling = false;


var table;
// gets the time between updates
function calculateDeltaTime() {
    var now = Date.now();
    deltaTime = (now - lastUpdate) / 1000;
    lastUpdate = now;
}

function animate() {
    // TODO: compute elapsed time from last render and update the balls'
    // positions and velocities accordingly.
    calculateDeltaTime();
    table.updateTable(deltaTime);
}

function tick() {
    requestAnimFrame(tick);
    render();
    animate();
}

//------------------------------------------------------------
// render()
//------------------------------------------------------------
function renderBalls() {
    gl.bindBuffer(gl.ARRAY_BUFFER, ballBufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(circle.positionVertices), gl.STATIC_DRAW);

    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    for (var i = 0; i < table.balls.length; ++i) {
        gl.uniform4fv(uColor, flatten(table.balls[i].uColor));
        gl.uniformMatrix4fv(mvMatrixLoc, false, flatten(table.balls[i].mvMatrix));
        gl.drawArrays(gl.TRIANGLE_FAN, 0, circle.positionVertices.length);
    }
}

function renderCue() {
    gl.bindBuffer(gl.ARRAY_BUFFER, cueBuffferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(cue.tipVertices), gl.STATIC_DRAW);

    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    gl.uniform4fv(uColor, flatten(cue.tipColor.uColor));
    gl.uniformMatrix4fv(mvMatrixLoc, false, flatten(cue.mvMatrix));
    gl.drawArrays(gl.TRIANGLE_FAN, 0, cue.tipVertices.length);
}

function renderTable() {
    gl.bindBuffer(gl.ARRAY_BUFFER, tableBufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(table.rect.positionVertices), gl.STATIC_DRAW);

    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    for (var i = 0; i < table.surfaces.length; ++i) {
        gl.uniform4fv(uColor, flatten(table.surfaces[i].uColor));
        gl.uniformMatrix4fv(mvMatrixLoc, false, flatten(table.surfaces[i].mvMatrix));
        gl.drawArrays(gl.TRIANGLE_FAN, 0, table.rect.positionVertices.length);
    }
}

// helpful for debugging shows all of the vectors
function renderVectors() {
    // create all of the vector lines for the acceleration and velocity
    for (var j = 0; j < table.balls.length; ++j) {
        var ball = table.balls[j];
        if (Artem.magnitude(ball.velocity) > 0) {
            vectorLines.push(new Lines(Artem.blue, ball.position, ball.velocity));
            vectorLines.push(new Lines(Artem.red, ball.position, ball.acceleration));
        }
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vectorLinesBufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(line), gl.STATIC_DRAW);

    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    for (var i = 0; i < vectorLines.length; ++i) {
        gl.uniform4fv(uColor, flatten(vectorLines[i].color));
        gl.uniformMatrix4fv(mvMatrixLoc, false, flatten(vectorLines[i].mvMatrix));
        gl.drawArrays(gl.LINES, 0, 2);
    }

    vectorLines = [];
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    renderTable();
    renderBalls();
    // renderCue();

    if (debugMode) {
        renderVectors();
    }
}

//------------------------------------------------------------
// Initialization
//------------------------------------------------------------

/**
 * Initializes webgl, shaders and event callbacks.
 */
window.onload = function init() {
    var canvas = document.getElementById('gl-canvas');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    // creates a circle which contains
    circle = Artem.createCircle(0.03, 50);

    table = new BilliardsTable(-0.9, -0.5, 0.9, 0.5);
    // cue = new CueStick();

    //----------------------------------------
    // Configure WebGL
    //----------------------------------------
    gl.viewport(0, 0, canvasWidth, canvasHeight);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // load shaders and initialize attribute buffers
    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    uColor = gl.getUniformLocation(program, "uColor");
    mvMatrixLoc = gl.getUniformLocation(program, "mvMatrix");
    vPosition = gl.getAttribLocation(program, "vPosition");

    ballBufferId = gl.createBuffer();
    tableBufferId = gl.createBuffer();
    vectorLinesBufferId = gl.createBuffer();
    cueBuffferId = gl.createBuffer();

    canvas.addEventListener("mousedown", function (event) {
        var mousePosition = getMousePosition(event);
        if (Artem.distanceVec2(mousePosition, table.whiteBall.position) <= table.whiteBall.radius) {
            pulling = true;
            initMousePosition = mousePosition;
        }
        cue = CueStick(table.whiteBall.position, mousePosition)
    });

    canvas.addEventListener("mouseup", function (event) {
        if (pulling) {
            var mousePos = getMousePosition(event);
            var vectorBetween = subtract(mousePos, initMousePosition);
            table.whiteBall.applyForce(Artem.multVec2ByScalar(vectorBetween, -5.0));

            pulling = false;
        }
    });

    lastUpdate = Date.now();
    tick();
};

function poolParty(){
    var ball = new Ball(circle.radius, vec4(Math.random(), Math.random(), Math.random(), 1.0), 0.0,0.0);
    ball.velocity = vec2(getRandomRangedNumber(-1,1), getRandomRangedNumber(-1,1));
    table.balls.push(ball);
}

function toggleDebugMode() {
    debugMode = !debugMode;
}

function getMousePosition(event) {
    var mouseX = (event.offsetX / gl.canvas.width) * 2 - 1;
    var mouseY = (1 - (event.offsetY / gl.canvas.height)) * 2 - 1;
    return vec2(mouseX, mouseY);
}

// class for the ball
class Ball {
    constructor(radius, uColor, xCenter, yCenter) {
        this.radius = radius;
        this.uColor = uColor;
        this.isWhiteBall = uColor == Artem.white;
        this.isBlackBall = uColor == Artem.black;
        this.mvMatrix = mat4();
        this.position = vec2(xCenter, yCenter);
        this.velocity = vec2();
        this.coefFriction = 0;
        this.acceleration = vec2();
    }

    update(deltaTime) {
        this.updateAcceleration();
        this.updateVelocity(deltaTime);
        this.updatePosition(deltaTime);

        this.mvMatrix = translate(this.position[0], this.position[1], 0);
    }

    updatePosition(t) {
        this.position =
            add(
                add(
                    Artem.multVec2ByScalar(this.acceleration, 0.5 * t * t), // 1/2 * a * t^2
                    Artem.multVec2ByScalar(this.velocity, t)                // v * t
                ),
                this.position                                               // x
            );
    }

    updateAcceleration() {
        this.acceleration = Artem.multVec2ByScalar(this.velocity, -1.0);
    }

    updateVelocity(t) {
        this.velocity = add(Artem.multVec2ByScalar(this.acceleration, t), this.velocity);
        if (Artem.magnitude(this.velocity) < 0.005) {
            this.velocity = vec2();
        }
    }


    // check to see if a ball is colliding with another ball
    isColliding(otherBall) {
        var d = Artem.distanceVec2(this.position, otherBall.position);
        return d <= this.radius + otherBall.radius;
    }

    collision(otherBall) {
        var normal = normalize(subtract(this.position, otherBall.position));
        var negNormal = Artem.multVec2ByScalar(normal, -1.0);

        var normalVelocity1 = Artem.multVec2ByScalar(negNormal, dot(this.velocity, negNormal));
        var normalVelocity2 = Artem.multVec2ByScalar(normal, dot(otherBall.velocity, normal));

        var tangentVelocity1 = subtract(this.velocity, normalVelocity1);
        var tangentVelocity2 = subtract(otherBall.velocity, normalVelocity2);

        this.velocity = add(normalVelocity2, tangentVelocity1);
        otherBall.velocity = add(normalVelocity1, tangentVelocity2);
        // var d = Artem.distanceVec2(this.position, otherBall.position);
        //
        // if (d <= this.radius + this.radius) {
        //     // console.log("thingy:  "+ d + " inside");
        //     normal = Artem.multVec2ByScalar(normal, this.radius / 2 - 0.001);
        //     negNormal = Artem.multVec2ByScalar(negNormal, this.radius / 2 - 0.001);
        //     // console.log(negNormal);
        //     // console.log(normal);
        //     this.position = add(this.position, normal);
        //     otherBall.position = add(otherBall.position, negNormal);
        //
        // }

    }

    applyForce(vec2) {
        this.velocity = vec2;
    }
}

// TODO: create this
class CueStick {
    constructor(whiteBallPosition, mousePosition) {
        this.tipVertices = [];
        this.tipVertices.push(whiteBallPosition);
        this.tipVertices.push(mousePosition);
        this.mvMatrix = mat4();
        this.tipColor = Artem.white;
    }
}

// class for the table
class BilliardsTable {
    constructor(x1, y1, x2, y2) {
        this.balls = [];
        this.surfaces = [];
        this.rect = Artem.createRectangle(x1, y1, x2, y2);
        this.rightBoundary = x2;
        this.leftBoundary = x1;
        this.topBoundary = y2;
        this.bottomBoundary = y1;
        this.rightWallVec = normalize(subtract(vec2(x2, y2), vec2(x2, y1)));
        this.leftWallVec = normalize(subtract(vec2(x1, y1), vec2(x1, y2)));
        this.topWallVec = normalize(subtract(vec2(x2, y2), vec2(x1, y2)));
        this.bottomWallVec = normalize(subtract(vec2(x2, y1), vec2(x1, y1)));
        this.setUpTable();
        this.whiteBall = this.balls[0];
    }

    createTableSurface() {
        var surface1 = {
            mvMatrix: mult(this.rect.mvMatrix, scalem(1.1, 1.2, 1.1)),
            uColor: Artem.gray
        };
        this.surfaces.push(surface1);

        var surface = {
            mvMatrix: mat4(),
            uColor: vec4(0.0, 0.7, 0.0, 1.0)
        };
        this.surfaces.push(surface);
    }

    updateTable(deltaTime) {
        // maybe there is a better way to handle the collisions
        // collision loop
        for (var i = 0; i < this.balls.length; ++i) {
            var ball = this.balls[i];

            // check collisions
            for (var j = i + 1; j < this.balls.length; ++j) {
                if (ball.isColliding(this.balls[j])) {
                    ball.collision(this.balls[j]);
                }

                // var d = Artem.distanceVec2(ball.position, this.balls[j].position);
                // if (d <= ball.radius * 4 && debugMode) {
                //     var normal = normalize(subtract(ball.position, this.balls[j].position));
                //     var negNormal = Artem.multVec2ByScalar(normal, -1.0);
                //
                //     vectorLines.push(new Lines(Artem.purple, ball.position, normal));
                //     vectorLines.push(new Lines(Artem.purple, this.balls[j].position, negNormal));
                //
                //     var normalVelocity1 = Artem.multVec2ByScalar(negNormal, dot(ball.velocity, negNormal));
                //     var normalVelocity2 = Artem.multVec2ByScalar(normal, dot(this.balls[j].velocity, normal));
                //
                //     vectorLines.push(new Lines(Artem.yellow, ball.position, normalVelocity1));
                //     vectorLines.push(new Lines(Artem.yellow, this.balls[j].position, normalVelocity2));
                //
                //     var tangentVelocity1 = subtract(ball.velocity, normalVelocity1);
                //     var tangentVelocity2 = subtract(this.balls[j].velocity, normalVelocity2);
                //
                //     vectorLines.push(new Lines(Artem.black, ball.position, tangentVelocity1));
                //     vectorLines.push(new Lines(Artem.black, this.balls[j].position, tangentVelocity2));
                // }
            }

            this.wallCollision(ball);
            this.balls[i].update(deltaTime);
        }
    }

    wallCollision(ball) {
        if (ball.position[0] + ball.radius >= this.rightBoundary) {
            ball.velocity = Artem.getReflectionVec2(ball.velocity, this.rightWallVec);
        } else if (ball.position[0] - ball.radius <= this.leftBoundary) {
            ball.velocity = Artem.getReflectionVec2(ball.velocity, this.leftWallVec);
        } else if (ball.position[1] + ball.radius >= this.topBoundary) {
            ball.velocity = Artem.getReflectionVec2(ball.velocity, this.topWallVec);
        } else if (ball.position[1] - ball.radius <= this.bottomBoundary) {
            ball.velocity = Artem.getReflectionVec2(ball.velocity, this.bottomWallVec);
        }
    }

    setUpTable() {
        var xOff = 0.3;
        var yOff = 0.0;
        this.balls.push(new Ball(circle.radius, Artem.white, -0.5, 0.0));

        this.balls.push(new Ball(circle.radius, Artem.red, -0.095 + xOff, 0.0 + yOff));

        this.balls.push(new Ball(circle.radius, Artem.purple, -0.0325 + xOff, 0.0325 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.orange, -0.0325 + xOff, -0.0325 + yOff));

        this.balls.push(new Ball(circle.radius, Artem.gray, 0.0325 + xOff, 0.065 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.green, 0.0325 + xOff, 0.0 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.blue, 0.0325 + xOff, -0.065 + yOff));

        this.balls.push(new Ball(circle.radius, Artem.red, 0.095 + xOff, -0.0975 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.gray, 0.095 + xOff, 0.0975 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.green, 0.095 + xOff, 0.0325 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.blue, 0.095 + xOff, -0.0325 + yOff));

        this.balls.push(new Ball(circle.radius, Artem.yellow, 0.15 + xOff, -0.13 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.black, 0.15 + xOff, -0.065 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.purple, 0.15 + xOff, 0.13 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.orange, 0.15 + xOff, 0.065 + yOff));
        this.balls.push(new Ball(circle.radius, Artem.brown, 0.15 + xOff, 0.0 + yOff));
        this.createTableSurface();
    }
}


class Lines {
    constructor(color, position, vector) {
        this.color = color;
        this.vector = vector;
        this.position = position;
        this.mvMatrix = mult(mat4(), translate(position[0], position[1], 0.0));
        this.rotate();
    }

    rotate() {
        var vec = vec2(0, 1);
        var magVec = Artem.magnitude(this.vector);

        var a = dot(vec, this.vector);
        var b = Artem.magnitude(vec) * magVec;

        var angle = Math.acos(a / b) * (180 / Math.PI);
        if (this.vector[0] < 0) {
            angle = -angle;
        }

        this.mvMatrix = mult(this.mvMatrix, rotateZ(angle));
        this.mvMatrix = mult(this.mvMatrix, scalem(magVec * .5, magVec * .5, 1));
    }
}
