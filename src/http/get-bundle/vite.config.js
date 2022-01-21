import { defineConfig } from 'vite';
import marko from '@marko/vite';
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [marko(), ssr()],
});
