import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import json from '@rollup/plugin-json';
import ignoreImport from 'rollup-plugin-ignore-import';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

const presets = () => {
  return [
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.build.json'),
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
          declaration: false,
        },
      },
    }),
    json(),
    commonjs(),
    resolve(),
    ignoreImport({
      // Ignore all .scss and .css file imports while building the bundle
      extensions: ['.less', '.css'],
      // Optional: replace body for ignored files. Default value is "export default undefined;"
      body: 'export default undefined;',
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],
    }),
  ];
};

const createEnvPlugin = (env) => {
  return injectProcessEnv(
    {
      NODE_ENV: env,
    },
    {
      exclude: '**/*.{css,less,sass,scss}',
      verbose: false,
    },
  );
};

export default (
  filename,
  targetName,
  format = 'umd',
  input = 'src/index.ts',
) => [
  {
    input: input,
    output: {
      format: format,
      file: `dist/${filename}.development.js`,
      name: targetName,
      sourcemap: true,
      amd: {
        id: filename,
      },
    },
    plugins: [...presets(filename), createEnvPlugin('development')],
  },
  {
    input: input,
    output: {
      format: format,
      file: `dist/${filename}.production.js`,
      name: targetName,
      sourcemap: false,
      amd: {
        id: filename,
      },
    },
    plugins: [...presets(filename), terser(), createEnvPlugin('production')],
  },
];
