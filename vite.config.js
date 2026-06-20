import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the config file Vite uses to know how to build/run the project.
// You probably won't need to touch this for a long time.
export default defineConfig({
  plugins: [react()],
})
