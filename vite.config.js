import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// اگر روی GitHub Pages دیپلوی می‌کنی، base را به صورت "/<repo-name>/" تنظیم کن
export default defineConfig({
  plugins: [react()],
  base: '/', // برای Vercel همین بمونه. اگر GitHub Pages: base: '/crypto-assistant-pro/'
})
