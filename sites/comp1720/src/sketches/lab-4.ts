import type p5 from "p5";

export function lab4Sketch(p: p5) {
  let score = 0;
  let lastSwing = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth, 500);
    p.noStroke();
    p.textSize(p.width * 0.09);
  };

  p.draw = () => {
    p.background(50, 230, 100);
    p.fill(0);
    p.text("SCORE: " + score, 20, 40);

    for (let i = 0; i < 12; i++) {
      p.fill(40);
      p.ellipse(
        p.width * 0.2 + p.width * 0.2 * (i % 4),
        p.height * 0.35 + p.height * 0.2 * p.floor(i / 4),
        p.width * 0.1,
        p.height * 0.1,
      );

      p.fill(170, 100, 40);
      const x = p.width * 0.2 + p.width * 0.2 * (i % 4) - p.height * 0.05;
      const y = p.height * 0.35 + p.height * 0.2 * p.floor(i / 4) - p.height * 0.11;
      const w = p.height * 0.1;
      const h = p.height * 0.15;

      if (p.tan((p.frameCount + 999) / (i * 0.89 + 30)) > 0.3) {
        p.fill(170, 100, 40);
        p.rect(x, y, w, h);
      }

      if (
        p.mouseX > x &&
        p.mouseX < x + w &&
        p.mouseY > y &&
        p.mouseY < y + h &&
        p.tan((p.frameCount + 999) / (i * 0.89 + 30)) > 0.3 &&
        p.mouseIsPressed &&
        p.frameCount - lastSwing > 10
      ) {
        score++;
        lastSwing = p.frameCount;
      }
    }
  };
}
