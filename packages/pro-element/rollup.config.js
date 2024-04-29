import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: './dist/pro-element.production.js',
      format: 'umd',
      name: 'proElement',
    },
    {
      file: './esm/pro-element.production.js',
      format: 'es',
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
    // terser(),
  ],
};

export default config;
