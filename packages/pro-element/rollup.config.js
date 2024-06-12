import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import pkg from './package.json';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  input: 'src/index.js',
  output: [
    {
      file: './dist/pro-element.production.js',
      format: 'umd',
      name: 'proElement',
    },
    {
      dir: path.resolve(__dirname, 'esm'),
      format: 'es',
      name: '@test/pro-element',
      exports: 'named',
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: path.resolve(__dirname, 'src'),
    },
  ],
  external: ['vue', 'element-ui'],
  plugins: [
    resolve({
      extensions: ['.vue'],
      exclude: '**/node_modules/**',
    }),
    vue({
      css: true,
      compileTemplate: true,
    }),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
    }),
    terser(),
  ],
};

export default config;
