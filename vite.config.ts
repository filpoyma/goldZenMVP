import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    svgr({
      // Plain `*.svg` → React component. Use `*.svg?url` for asset URL (see Vite).
      include: ['**/*.svg', '**/*.svg?react'],
    }),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
