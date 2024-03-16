import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [postcssPresetEnv({ stage: 1 }), autoprefixer],
});
