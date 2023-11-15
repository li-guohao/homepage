import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // vite 配置
    plugins: [vue(),
      createHtmlPlugin({
        inject: {
          data: {
            logo: env.LOGO_URL,
            title: env.TITLE,
          },
        },
      })],
  }
})
