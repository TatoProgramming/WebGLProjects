/**
 * Created by Taylor on 9/7/2017.
 */

/**
 * Gets a random number between a range
 * @param min - min value
 * @param max - max value
 * @returns {*}
 */
function getRandomRangedNumber(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Get a random number between 0.0 and 1.0
 * @returns {*}
 */
function getRandomNumberBetween0and1() {
    return getRandomRangedNumber(0.0, 1.0);
}

/**
 * Generates a zero or a one randomly
 * @returns {*}
 */
function randomOneOrZero() {
    return getRandomRangedNumber(0, 1);
}

/**
 * Scales the vertices
 * @param s - size
 * @param vertices - the vertices array to scale
 */
function scaleVertices(s, vertices) {
    for (var i = 0; i < vertices.length; ++i) {
        vertices[i] = scale(s, vertices[i]);
    }
}

