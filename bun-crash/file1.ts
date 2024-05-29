// bun run file1.ts
const file = await Bun.file("output.txt");
console.log(await file.text());
console.log(`${file.size} bytes`);
console.log(await file.stream());
console.log(await file.arrayBuffer());