import type p5 from "p5";

export function lab2Sketch(p: p5) {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(255);

    p.translate(p.width / 2, p.height / 2);
    p.rotate(p.frameCount / 100);

    for (let i = 0; i < 6; i++) {
      p.ellipse(p.sin(p.frameCount / 30) * 30, 5, 50, 2);

      p.rotate(p.frameCount / 100);

      p.ellipse(p.sin(p.frameCount / 20) * 20, 18, 10, 30);
      p.push();
      p.rotate(p.radians(30 / 2));
      p.ellipse(p.sin(p.frameCount / 20) * 20, 18, 10, 30);
      p.rotate(p.radians(30 / 2));
      p.ellipse(p.sin(p.frameCount / 20) * 20, 18, 10, 30);
      p.pop();

      p.rotate(p.radians(360 / 6));
    }
  };
}
