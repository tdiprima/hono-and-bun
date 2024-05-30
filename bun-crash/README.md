[Bun Crash Course](https://youtu.be/U4JVw8K19uY?si=x0j53Ixv3AdF8LRd)

```sh
bun init
bun --watch index.ts
bun --hot index.ts
bun start
bun run dev
```

### Basic routing

http://localhost:3000/

http://localhost:3000/blog

http://localhost:3000/hello (404)

### Bun x

`bunx` is similar to `npx`

```sh
bunx cowsay "Hello Bun"
```

### The Bundler

```sh
bun install axios

bun build ./src/index.ts --outfile=./dist/bundle.js
```

Run dist/index.html

### React and JSX

```sh
bun install react react-dom

# build + watch mode
bun build ./src/index.tsx --outfile=./dist/bundle1.js --watch
```

Run dist/index1.html

<br>
