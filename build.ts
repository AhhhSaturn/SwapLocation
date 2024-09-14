import { build, $ } from "bun";

await build({
    entrypoints: ['src/index.ts'],
    outdir: './dist',
    sourcemap: 'inline'
});
await $`cp ./src/manifest.json ./dist/`;
console.log('Built');