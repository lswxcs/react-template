import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://template.josephx1a.com",
    },
  },
  
  plugins: [tsconfigPaths(), react()],
  
  css: {
    modules: {
      hashPrefix: "pref1x",
    },
    preprocessorOptions: {
      less: {
        JavascriptEnabled: true
      },
    },
  },
});