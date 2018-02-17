/**
 * Created by Taylor on 10/19/2017.
 */
"use strict";

var MountainTerrain = function(parameters){
    var inc = parameters.inc;
    var max = parameters.max;
    var offset = parameters.offset;
    var coeff1 = parameters.coeff1;
    var coeff2 = parameters.coeff2;
    var power = parameters.power;
    var seed = parameters.seed;
    var points2D = [];
    var normals = [];
    var vertices = [];
    var colors = [];
    // var inc = 0.05;
    // var max = 5;
    var min = -max;
    // var seed = Math.random();
    // var offset = 0.04;
    // console.log(seed);
    // noise.seed(0.33662259779794024);
    var offsetCalc = inc - offset;
    noise.seed(seed);


    // TODO: create these value to be set by the user to give them control
    // TODO: make the iterations fit to a size.
    var zCord = min;
    for(var i = min; i <= max; i += inc){
        var xCord = min;
        var innerArr = [];
        for(var j = min; j <= max; j += inc){
            var e = noise.perlin2(xCord, zCord)
                + coeff1 * noise.perlin2(2 * xCord, 2 * zCord) // Todo create a way to set these co-ef
                + coeff2 * noise.perlin2(4 * xCord, 4 * zCord);

            var pow = Math.pow(e, power); // TODO: Create a way to set the power
            var y = isNaN(pow) ? 0 : pow;
            innerArr.push(vec4(xCord + random(-offset, offset), y, zCord + random(-offset, offset), 1.0));
            // innerArr.push(vec4(xCord, y, zCord , 1.0));
            xCord += inc;
        }
        points2D.push(innerArr);
        zCord += inc;
    }

    // createMesh(points2D);
    // createColors();
    createTriangles(points2D);

    this.normals = normals;

    this.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    this.colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);

    this.normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(normals), gl.STATIC_DRAW);


    this.numVertices = vertices.length;

    function random(min, max){
        return Math.random() * (max - min) + min;
    }

    function createMesh(points){
        for(var i = 0; i < points.length - 1; ++i){
            for(var j = 0; j < points.length - 1; ++j){
                var a = points[i][j];
                var b = points[i][j + 1];
                var c = points[i + 1][j];
                var d = points[i + 1][j + 1];


                vertices.push(a);
                vertices.push(b);
                vertices.push(b);
                vertices.push(d);
                vertices.push(d);
                vertices.push(a);
                vertices.push(a);
                vertices.push(c);
                vertices.push(c);
                vertices.push(d);
            }
        }

    }

    function createColors(){
        for(var i = 0; i < vertices.length; ++i){
            colors.push(getBiomeColor(vertices[i]));
        }

    }

    function createTriangles(points){
        for(var i = 0; i < points.length - 1; ++i){
            for(var j = 0; j < points.length - 1; ++j){
                var a = points[i][j];
                var b = points[i][j + 1];
                var c = points[i + 1][j];
                var d = points[i + 1][j + 1];


                // find max y push color 3 times
                vertices.push(a);
                vertices.push(c);
                vertices.push(d);
                // console.log(maxY([a,c,d]));
                createNormals(a, c, d);
                pushTriColor(maxY([a, c, d]));
                // find max y push color 3 times
                vertices.push(a);
                vertices.push(b);
                vertices.push(d);
                createNormals(a, d, b);
                pushTriColor(maxY([a, b, d]));
            }
        }
        // for (var i = 0; i < this.points2D.length; ++i) {
        //     for (var j = 0; j < this.points2D.length; ++j) {
        //
        //     }
        // }
    }

    function createNormals(a, b, c){
        var normal = computeNormalTriangle(a, b, c);
        for(var i = 0; i < 3; ++i){
            normals.push(normal);
        }
    }

    function pushTriColor(y){
        for(var i = 0; i < 3; ++i){
            colors.push(getBiomeColor(y))
        }
    }

    function maxY(points){
        var max = points[0][1];
        for(var i = 1; i < points.length; ++i){
            var y = points[i][1];
            if(max < y){
                max = y;
            }
        }
        // console.log(max);
        return max;
    }

    function getBiomeColor(y){
        if(y < -0.1){
            return vec4(146 / 255, 129 / 255, 124 / 255);
        }else if(y < -0.02){
            return vec4(1.0, 0.8, 0.6, 1.0);
        }else if(y < 0.2){
            return vec4(0.2, 0.5, 0.0, 1.0);
        }else if(y < 0.4){
            return vec4(0.4, 0.5, 0.3, 1.0);
        }else if(y < 0.8){
            return vec4(0.5, 0.5, 0.5, 1.0);
        }else{
            return vec4(1.0, 1.0, 1.0, 1.0);
        }
    }

    function computeNormalTriangle(a, b, c){
        var u = subtract(c, a);
        var v = subtract(c, b);
        var crossProduct = cross(u, v);
        crossProduct.push(1.0);
        return normalize(crossProduct, true);
    }
};
