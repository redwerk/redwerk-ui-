import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    dts({
      beforeWriteFile: (filePath, content) => {
        const newFilePath = filePath
          .replace('/src', '/types');

        return {
          filePath: newFilePath,
          content,
        };
      },
      skipDiagnostics: true,
    }),
  ],

  build: {
    target: ['edge90', 'chrome90', 'firefox90', 'safari15'],
    lib: {
      formats: ['es', 'cjs'],
      entry: resolve(__dirname, './src/index.ts'),
      name: 'RedwerkUI',
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@iconify/vue'],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          '@iconify/vue': 'Icon',
        },
      },
    },
  },
});
