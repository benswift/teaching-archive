import type p5 from "p5";

export function kaleidoscopeSketch(p: p5) {
  const slices = 14;
  const numShapes = 700;

  let shape: { a: number; o: number; h: number };
  let mask: p5.Image;

  p.setup = () => {
    p.createCanvas(p.windowWidth, 500);
    p.noStroke();

    shape = calcStuff(p.width, p.height, slices);
    mask = createMask(shape.a, shape.o);
  };

  p.draw = () => {
    p.background(255);
    drawShapes();
    mirror();
  };

  function drawShapes() {
    for (let i = 0; i < numShapes; i++) {
      p.fill(p.sin(i) * 255, p.sin((i + p.frameCount) / 50) * 255, 100);
      p.ellipse(
        p.sin(p.frameCount / 100 + i * 0.4) * p.width,
        p.cos(i * 0.23) * p.height,
        80 + p.cos(p.frameCount / 40 + 400 - i) * 50,
        80 + p.cos(p.frameCount / 30 + i) * 50,
      );

      p.fill(200, p.sin(i) * 255, p.sin((i + p.frameCount) / 50) * 255);
      p.rect(
        p.cos(p.frameCount / 300 + i * 0.4) * p.width,
        p.sin(i * 0.23) * p.height,
        80 + p.cos(p.frameCount / 40 + 400 - i) * 50,
        80 + p.tan(p.frameCount / 430 + i) * 50,
      );
    }
  }

  function mirror() {
    const img = p.get(0, 0, shape.a, shape.o);
    img.mask(mask);

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.rotate(p.radians(p.frameCount / 3));

    for (let i = 0; i < slices; i++) {
      if (i % 2 === 0) {
        p.push();
        p.scale(1, -1);
        p.image(img, 0, 0);
        p.pop();
      } else {
        p.rotate(p.radians((360 / slices) * 2));
        p.image(img, 0, 0);
      }
    }
    p.pop();
  }

  function calcStuff(width: number, height: number, s: number) {
    const a = p.sqrt(p.sq(width / 2) + p.sq(height / 2));
    const theta = p.radians(360 / s);
    const o = p.tan(theta) * a;
    const h = a / p.cos(theta);
    return { a: p.round(a), o: p.round(o), h: p.round(h) };
  }

  function createMask(w: number, h: number): p5.Image {
    const m = p.createImage(w, h);
    m.loadPixels();
    for (let i = 0; i < m.width; i++) {
      for (let j = 0; j < m.height; j++) {
        if (i >= p.map(j, 0, h, 0, w) - 1) {
          m.set(i, j, p.color(255));
        }
      }
    }
    m.updatePixels();
    return m;
  }
}
