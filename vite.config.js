import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false, // полностью отключаем минификацию JS и CSS
    rollupOptions: {
      output: {
        // задаём папки для ассетов
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]'; // все CSS → css/
          }
          return 'assets/[name][extname]'; // остальные ассеты
        },
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
      },
    },
  },
  css: {
    minify: false, // явно отключаем минификацию CSS
  },
});
