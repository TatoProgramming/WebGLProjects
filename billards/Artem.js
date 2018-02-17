/**
 * Created by Taylor on 9/12/2017.
 * decided to create a JS library for this class.
 * I can develop it over the semester and put useful things in this
 */

(function (window) {
    'use strict';

    function define_library() {
        var Artem = {};

        Artem.red = [1.0, 0.0, 0.0, 1.0];
        Artem.green = [0.0, 1.0, 0.0, 1.0];
        Artem.blue = [0.0, 0.0, 1.0, 1.0];
        Artem.white = [1.0, 1.0, 1.0, 1.0];
        Artem.black = [0.0, 0.0, 0.0, 1.0];
        Artem.purple = [1.0, 0.0, 1.0, 1.0];
        Artem.yellow = [1.0, 1.0, 0.0, 1.0];
        Artem.gray = [0.5, 0.5, 0.5, 1.0];
        Artem.orange = [1.0, 0.5, 0.0, 1.0];
        Artem.brown = [0.647059, 0.164706, 0.164706, 1.0];

        /**
         * Creates a circle
         * @param radius - radius of the circles
         * @param numberOfVertices - number of vertices
         * @param color - Can specify a color if wanted.
         * @returns {{radius: *, positionVertices: Array, colorVertices: Array}}
         */
        Artem.createCircle = function (radius, numberOfVertices, color = null) {
            // TODO: figure out how to get this to work in plain javascript, without using the MV library.
            var circle = {
                radius: radius,
                positionVertices: [],
                colorVertices: []
            };

            var pi2 = 2.0 * Math.PI;
            for (var i = 0; i < numberOfVertices; ++i) {
                var position = (i / numberOfVertices) * pi2;
                circle.positionVertices.push(
                    vec2(
                        circle.radius * Math.cos(position),
                        circle.radius * Math.sin(position)
                    )
                );
                if (color)
                    circle.colorVertices.push(color);
            }
            return circle;
        };

        Artem.createRectangle = function (bottomLeftX, bottomLeftY, topRightX, topRightY, color = null) {
            var rectangle = {
                positionVertices: [],
                colorVertices: [],
                mvMatrix: mat4()
            };

            rectangle.positionVertices.push(vec2(bottomLeftX, bottomLeftY));
            rectangle.positionVertices.push(vec2(topRightX, bottomLeftY));
            rectangle.positionVertices.push(vec2(topRightX, topRightY));
            rectangle.positionVertices.push(vec2(bottomLeftX, topRightY));

            if(color)
                for (var i = 0; i < 4; ++i)
                    rectangle.colorVertices.push(color);

            return rectangle;
        };

        /**
         * Gets the distance between two points
         */
        Artem.distance = function (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        };

        /**
         * Get the distance between two vectors
         */
        Artem.distanceVec2 = function (firstVec2, secondVec2) {
            return this.distance(firstVec2[0], firstVec2[1], secondVec2[0], secondVec2[1]);
        };

        Artem.multVec2ByScalar = function (vec, scalar) {
            return vec2(vec[0] * scalar, vec[1] * scalar);
        };

        Artem.getReflectionVec2 = function(firstVec2, secondVec2){
            var dotProd = dot(firstVec2, secondVec2);
            var refectionVector = this.multVec2ByScalar(secondVec2, dotProd * 2);
            refectionVector = subtract(refectionVector, firstVec2);

            return refectionVector;
        };

        Artem.magnitude = function(vec2){
            return Math.sqrt(Math.pow(vec2[0], 2) + Math.pow(vec2[1],2));
        };

        return Artem
    }

    if (typeof(Artem) === 'undefined') {
        window.Artem = define_library();
    } else {
        console.log("Artem already defined.");
    }
})(window);

function createCircle(radius, numberOfVertices, vertices, scale) {
    createCircleWithColor(radius, numberOfVertices, vertices, null, scale)
}


function createCircleWithColor(radius, numberOfVertices, vertices, colorVertices, scale) {
    for (var i = 0; i < numberOfVertices; ++i) {
        vertices.push(
            vec2(
                radius * Math.cos((i / numberOfVertices) * 2.0 * Math.PI),
                radius * Math.sin((i / numberOfVertices) * 2.0 * Math.PI)
            )
        );
        // if(colorVertices != null)
        colorVertices.push(vec4(0.0, 0.0, 0.0, 0.0));
    }
    scaleVertices(vertices, scale);
}

