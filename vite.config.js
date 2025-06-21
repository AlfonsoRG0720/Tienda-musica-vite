import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Carpeta raíz del proyecto
  root: '.',          

  // Carpeta de archivos estáticos (opcional)
  publicDir: 'public', 

  // Configuración de build (compilación)
  build: {
    // Carpeta donde se generan los archivos al hacer `npm run build`
    outDir: 'dist',

    // Opciones para Rollup (empaquetador)
    rollupOptions: {
      input: {
        // Entradas HTML para generar páginas distintas
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        Gestionar: resolve(__dirname, 'src/pages/gestionar.html'),
      },
    },

    // Borra el contenido anterior de dist en cada build
    emptyOutDir: true
  },

  // Configuración del servidor de desarrollo
  server: {
    port: 3000,       // Puerto local (http://localhost:3000)
    open: true        // Abre el navegador al iniciar
  }
})
