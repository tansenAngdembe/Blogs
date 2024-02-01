import { defineConfig } from 'vite'// used for project configuration
import react from '@vitejs/plugin-react'// plugin provided by vite for integrating react this enable the fe
//feature and optimization of react application.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
