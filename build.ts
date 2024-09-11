const { build } = require('esbuild');

build({
    entryPoints: ['src/main.ts'],
    outfile: 'dist/main.js',
    bundle: true,
    platform: 'node',
    minify: true,
}).catch(() => process.exit(1));
