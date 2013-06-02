/* spec: css */

precision mediump float;

uniform mat4 u_projectionMatrix;
attribute vec4 a_position;
attribute vec2 a_texCoord;

uniform float ripples;
uniform float time;
uniform float amplitude;
uniform mat4 transform;

const float PI = 3.1415;

varying vec2 v_uv;
varying float v_light;
varying float v_depth;

void main() {
  vec4 position = a_position;

  vec2 center = vec2(0.0, 0.0);

  float dist = distance(center, position.xy);

  float depth = time * cos((dist + 0.5) * ripples * 2.0 * PI);
  position.z = depth * amplitude;

  vec3 lightPosition = normalize(vec3(0.0, 0.5, 1.0));
  vec3 normal = normalize(position.xyz);
  float lightWeight = max(dot(normal, lightPosition), 0.0);

  gl_Position = u_projectionMatrix * transform * position;

  v_depth = depth * 0.5;
}