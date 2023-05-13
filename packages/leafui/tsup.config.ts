import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.ts'],
  minify: true,
  target: 'es2018',
  external: ['react'],
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  treeshake: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
});
