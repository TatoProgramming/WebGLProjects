/**
 * Created by Taylor on 10/27/2017.
 */

var Water = function(inc, max, yHeight, color){
    var vertices = [];
    var normals = [];
    var min = -max;
    var animationSize = 10;
    this.uColor = color;
    this.seed = Math.random();
    noise.seed(this.seed);

    // var cubeMap;/
    // function generatePoints(time){
        var points = [];
        var zCoord = min;
        for(var i = min; i <= max; i += inc){
            var xCoord = min;
            var innerArr = [];
            for(var j = min; j <= max; j += inc){
                var xTime = xCoord + time;
                var zTime = zCoord + time;
                var e = noise.perlin2(xTime * 8, zTime * 8);

                innerArr.push(vec4(xCoord, e / 15 + yHeight, zCoord));
                xCoord += inc;
            }
            points.push(innerArr);
            zCoord += inc;
        }
        createTriangles(points);
    // }

    // for(var i = 0; i < animationSize; ++i){
    //     generatePoints(i);
    // }

    // generatePoints(0);

    this.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    this.normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(normals), gl.STATIC_DRAW);

    if(vertices.length !== normals.length) throw "Normals and vertices are not the same length";

    this.numVertices = vertices.length;

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
                createNormals(a, c, d);
                // pushTriColor(maxY([a, c, d]));

                // find max y push color 3 times
                vertices.push(a);
                vertices.push(b);
                vertices.push(d);
                createNormals(a, d, b);
                // pushTriColor(maxY([a, b, d]));
            }
        }
    }

    function createNormals(a, b, c){
        var normal = computeNormalTriangle(a, b, c);
        for(var i = 0; i < 3; ++i){
            normals.push(normal);
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
