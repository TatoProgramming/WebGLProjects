/**
 * Created by Taylor on 10/20/2017.
 */
var Cube = function(imagesArr){
    // Set up vertices, normals and texture coords
    var pointsArray = [];
    var colorsArray = [];
    var normalArray = [];
    var textureCoordsData = [];
    var cubeMap;
    var cubeMap2;

    loadTextureCube();

    var vertices = [
        vec4(-0.5, -0.5, 0.5, 1.0),
        vec4(-0.5, 0.5, 0.5, 1.0),
        vec4(0.5, 0.5, 0.5, 1.0),
        vec4(0.5, -0.5, 0.5, 1.0),
        vec4(-0.5, -0.5, -0.5, 1.0),
        vec4(-0.5, 0.5, -0.5, 1.0),
        vec4(0.5, 0.5, -0.5, 1.0),
        vec4(0.5, -0.5, -0.5, 1.0)
    ];

    var texCoord = [
        vec2(0, 0),
        vec2(0, 1),
        vec2(1, 1),
        vec2(1, 0)
    ];

    createCube();

    for(var i = 0; i < pointsArray.length; ++i){
        colorsArray.push(vec4(0.0, 0.0, 0.0, 1.0));
    }

    this.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);

    this.colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW);

    this.textureBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(textureCoordsData), gl.STATIC_DRAW);

    // loadTextureCubeGeneric(urls, gl.TEXTURE0);
    this.numPoints = pointsArray.length;

    function loadTextureCube(){
        var ct = 0;
        var img = new Array(6);
        var urls = [
            "daylight/xpos.png", "daylight/xneg.png",
            "daylight/ypos.png", "daylight/yneg.png",
            "daylight/zpos.png", "daylight/zneg.png"
        ];
        for(var i = 0; i < 6; i++){
            img[i] = new Image();
            img[i].onload = function(){
                ct++;
                if(ct === 6){
                    cubeMap = gl.createTexture();
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeMap);

                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGBA, gl.RGBA,
                        gl.UNSIGNED_BYTE, img[0]);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGBA, gl.RGBA,
                        gl.UNSIGNED_BYTE, img[1]);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGBA, gl.RGBA,
                        gl.UNSIGNED_BYTE, img[2]);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGBA, gl.RGBA,
                        gl.UNSIGNED_BYTE, img[3]);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGBA, gl.RGBA,
                        gl.UNSIGNED_BYTE, img[4]);
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGBA, gl.RGBA,
                        gl.UNSIGNED_BYTE, img[5]);

                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

                    gl.activeTexture(gl.TEXTURE0);
                }
            };
            img[i].src = urls[i];
        }
    }

    function quad(a, b, c, d){
        pointsArray.push(vertices[a]);
        textureCoordsData.push(texCoord[0]);
        pointsArray.push(vertices[b]);
        textureCoordsData.push(texCoord[1]);
        pointsArray.push(vertices[c]);
        textureCoordsData.push(texCoord[2]);
        pointsArray.push(vertices[a]);
        textureCoordsData.push(texCoord[0]);
        pointsArray.push(vertices[c]);
        textureCoordsData.push(texCoord[2]);
        pointsArray.push(vertices[d]);
        textureCoordsData.push(texCoord[3]);
    }

    function createCube(){
        quad(1, 0, 3, 2);
        quad(2, 3, 7, 6);
        quad(3, 0, 4, 7);
        quad(6, 5, 1, 2);
        quad(4, 5, 6, 7);
        quad(5, 4, 0, 1);
    }
};
