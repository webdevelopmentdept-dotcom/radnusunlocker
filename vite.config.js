import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-google-verification',
      apply: 'build',
      writeBundle() {
        try {
          copyFileSync('public/google1e16842b0c746b.html', 'dist/google1e16842b0c746b.html')
          console.log('✅ Google verification file copied successfully!')
        } catch (err) {
          console.error('❌ Error copying Google verification file:', err)
        }
      }
    }
  ]
})
