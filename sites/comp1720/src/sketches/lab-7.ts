import type p5 from "p5";

interface Ring {
  x: number;
  y: number;
  size: number;
}

export function lab7Sketch(p: p5) {
  const rings: Ring[] = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth, 500);

    for (let i = 0; i < 40; i++) {
      rings.push({ x: p.random(p.width), y: p.random(p.height), size: 0 });
    }
  };

  p.draw = () => {
    rings.forEach(drawRing);
    rings.forEach(updateRing);
  };

  function drawRing(r: Ring) {
    p.noFill();
    let collisions = 0;
    rings.forEach((r2) => {
      if (r !== r2 && p.dist(r.x, r.y, r2.x, r2.y) < (r.size + r2.size) / 2) {
        collisions += 1;
      }
    });

    if (collisions % 2 === 0) p.stroke(0);
    else p.stroke(255);
    if (collisions > 9) {
      rings.splice(rings.indexOf(r), 1);
    }
    p.ellipse(r.x, r.y, r.size);
  }

  function updateRing(r: Ring) {
    r.size++;

    if (p.random(100) > 98) {
      rings.splice(rings.indexOf(r), 1);
      rings.push({ x: p.random(p.width), y: p.random(p.height), size: 0 });
    }
  }
}
