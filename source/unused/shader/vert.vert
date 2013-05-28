/* spec: css */

precision mediump float;

uniform mat4 u_projectionMatrix;
attribute vec4 a_position;

uniform float time;
uniform mat4 transform;

const float PI = 3.1415;

void main() {
  vec4 position = a_position;

  // float revTime = 1.0 - time;

  // -0.5, -0.25, 0.0, 0.25, 0.5

  if (position.x == -0.5) {
    position.x = -0.125;
    position.z = -150.0;
  }

  if (position.x == -0.25) {
    position.x = -0.125;
    position.z = 150.0;
  }

  if (position.x == 0.0) {
    position.x = 0.125;
    position.z = 150.0;
  }

  if (position.x == 0.25) {
    position.x = 0.125;
    position.z = -150.0;
  }

  if (position.x == 0.5) {
    position.x = -0.125;
    position.z = -150.0;
  }

  gl_Position = u_projectionMatrix * transform * position;

}