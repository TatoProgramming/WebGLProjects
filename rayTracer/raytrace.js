function getColorTestPattern(x, y) {
  x = (x+1)/2;
  y = (y+1)/2;
  return vec3(x, 1-x, y);
}

/**
 * x and y are the normalized device coordinates (-1, -1) to (1, 1).
 * Return a vec3 with the color at this (normalized) pixel coordinate.
 */
function getColor(x, y) {
  // TODO
  return vec3(0, 0, 0);
}
