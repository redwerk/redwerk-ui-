import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { readdirSync } from 'fs';

const getDirectories = (source: string) => readdirSync(source, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

export const input: Record<string, string> = {};

const components = getDirectories(resolve(__dirname, 'src/components/'));

components.forEach((component) => {
  input[component] = resolve(__dirname, `src/components/${component}`);
});
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  build: {
    target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
    emptyOutDir: false,
    outDir: 'dist',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    lib: {
      fileName: '[name]/index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      input,
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
