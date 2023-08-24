import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  themeConfig: {
    name: 'henu-design',
  },
});
