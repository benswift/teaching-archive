import type p5 from "p5";

interface Brush {
  color: p5.Color;
  size: number;
  pos: p5.Vector;
  vel: p5.Vector;
}

export function lab6Sketch(p: p5) {
  const brushes: Brush[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth, 500);

    const palette = [
      p.color(237, 176, 5),
      p.color(187, 16, 6),
      p.color(26, 82, 164),
      p.color(236, 126, 3),
    ];

    for (let i = 1; i <= 102; i++) {
      brushes.push({
        color: p.lerpColor(
          palette[p.floor(p.random(palette.length))],
          palette[p.floor(p.random(palette.length))],
          p.random(1),
        ),
        size: p.randomGaussian(6, 3),
        pos: p.createVector(p.random(p.width), p.random(p.height)),
        vel: p.createVector(0, 0),
      });
    }

    p.noStroke();
    p.mouseX = p.width / 2;
    p.mouseY = p.height / 2;
    p.background(255);
  };

  p.draw = () => {
    brushes.forEach(drawBrush);
    brushes.forEach(moveBrush);
  };

  function drawBrush(b: Brush) {
    p.fill(b.color);
    p.ellipse(b.pos.x, b.pos.y, b.size);
  }

  function moveBrush(b: Brush) {
    b.pos.add(b.vel);
    for (let i = 0; i < brushes.length; i++) {
      if (brushes[i] === b) continue;

      const g = b.pos.copy();
      g.sub(brushes[i].pos);
      g.normalize();

      if (b.pos.dist(brushes[i].pos) > 90) {
        g.div(4);
        b.vel.add(g);
      } else {
        b.vel.add(g.mult(100 - b.pos.dist(brushes[i].pos)));
      }
    }

    const m = p.createVector(p.mouseX, p.mouseY);
    m.sub(b.pos);
    m.normalize();
    m.mult(10 - p.max(b.pos.dist(p.createVector(p.mouseX, p.mouseY)), 100));
    b.vel.sub(m);

    const n = p.noise(b.pos.x / 400, b.pos.y / 400);
    b.vel.add(p.createVector(p.sin(n * p.TWO_PI * 400), p.cos(n * p.TWO_PI * 400)).mult(100));

    b.vel.limit(1);
  }
}
