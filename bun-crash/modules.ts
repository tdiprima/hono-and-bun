// bun run modules.ts
import path from "path";
// or const path = require("path");

// const filepath = path.join(__dirname, "index.ts");
// console.log(filepath);

const filepath = path.join("foo", "bar", "image.png");
const filename = path.basename(filepath);
console.log(filename);
