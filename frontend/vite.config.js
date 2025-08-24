import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',       // aceita conexões externas
    port: 5173,
    strictPort: true,
    allowedHosts: ['.csb.app'], // libera todos os subdomínios do CodeSandbox
    cors: true,
    server: {
      host: true, // permite acesso de outros dispositivos na mesma rede
    }
  }
})
