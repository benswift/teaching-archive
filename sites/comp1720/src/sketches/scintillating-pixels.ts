import type p5 from "p5";

export function scintillatingPixelsSketch(p: p5) {
  const SHADES = 256;
  const canvasWidth = 400;
  const canvasHeight = 300;
  let delta = 0;

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    p.colorMode(p.RGB, SHADES - 1);
    p.frameRate(30);
  };

  p.draw = () => {
    for (let x = 0; x < p.width; x++) {
      for (let y = 0; y < p.height; y++) {
        p.set(
          x,
          y,
          p.color(
            (x - y + delta) % SHADES,
            (x + y + 3 * delta) % SHADES,
            (x + y + 2 * delta) % SHADES,
            p.min(delta / 5, SHADES),
          ),
        );
      }
    }
    p.updatePixels();
    delta++;
  };
}
