import { cpSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(import.meta.url), "../..");
const OUT = join(ROOT, "dist");

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

writeFileSync(join(OUT, ".nojekyll"), "");
writeFileSync(join(OUT, "CNAME"), "teaching.benswift.me");

cpSync(join(ROOT, "sites/landing/dist"), OUT, { recursive: true });

const sites = [
  "comp1720",
  "comp2300",
  "comp2710-lens",
  "compiot-bit",
  "extn1019",
];

for (const name of sites) {
  const src = join(ROOT, "sites", name, "dist");
  const dest = join(OUT, name);
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

console.log("Assembly complete → dist/");
