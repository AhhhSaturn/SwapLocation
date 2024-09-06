import { build, $ } from "bun";

await build({
    entrypoints: ['./index.ts'],
    outdir: './dist',
    sourcemap: 'inline'
})
await $`cp ./manifest.json ./dist/`;
console.log('Built');