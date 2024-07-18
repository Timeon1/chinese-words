import { defineConfig } from 'vite'
export default defineConfig({
  resolve: {
    alias: {
      '@content': '/opt/buildhome/repo/src/content',
    },
  },
  build: {
    rollupOptions: {
      external: [
        "src/content/list/hsk1.json",
        "src/content/list/hsk2.json",
        "src/content/list/hsk3.json",
        "src/content/list/hsk4.json",
        "src/content/list/hsk5.json",
        "src/content/list/hsk6.json",
        "src/content/list/hsk7-9.json",
        "src/content/list/allchar.json",
        "src/content/list/chengyu.json",
      ],
    },
  },
});
