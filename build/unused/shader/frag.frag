/* spec: css */

precision mediump float;

varying vec2 v_uv;
varying float v_light;
varying float v_depth;

void main() {
  css_ColorMatrix = mat4(1.0, 0.0, 0.0, 0.0,
                         0.0, 1.0, 0.0, 0.0,
                         0.0, 0.0, 1.0, 0.0,
                         0.0, 0.0, 0.0, 1.0);

  // if (v_depth < 0.0) {
  //   css_MixColor = vec4(0.0, 0.0, 0.0, abs(v_depth));
  // } else {
  //   css_MixColor = vec4(1.0, 1.0, 1.0, abs(v_depth));
  // }

  // umm, where did gl_FragColor go?
}