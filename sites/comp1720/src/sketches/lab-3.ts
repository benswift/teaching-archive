import type p5 from "p5";

export function lab3Sketch(p: p5) {
  const elements: { pos: p5.Vector; dir: p5.Vector }[] = [];

  p.setup = () => {
    p.createCanvas(400, 400);
    for (let i = 0; i < 70; i++) {
      elements.push({
        pos: p.createVector(0, 0),
        dir: p.createVector(p.random(-2, 2), p.random(-2, 2)),
      });
    }
    p.background(0);
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    for (let i = 0; i < elements.length; i++) {
      elements[i].pos.add(elements[i].dir);
      elements[i].dir.add(
        p.createVector(p.random(-1, 1) * 0.1, p.random(-1, 1) * 0.1),
      );
      if (p.createVector(0, 0).dist(elements[i].pos) > 300) {
        elements[i].pos = p.createVector(0, 0);
      }

      for (let j = 0; j < elements.length; j++) {
        if (elements[i].pos.dist(elements[j].pos) < 40) {
          p.stroke(
            p.lerpColor(
              p.color(0, 170),
              p.color(255, 40),
              elements[i].pos.dist(elements[j].pos) / 40,
            ),
          );

          p.line(
            elements[i].pos.x,
            elements[i].pos.y,
            elements[j].pos.x,
            elements[j].pos.y,
          );
        }
      }
    }
  };
}
