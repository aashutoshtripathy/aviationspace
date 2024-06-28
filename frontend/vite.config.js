// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8000', // Base URL of your API server
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '/api/v1/users')
//       }
//     }
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// console.log('VITE_API_BASE_URL:',  import.meta.VITE_API_BASE_URL);


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8000',
//         // target: import.meta.VITE_API_BASE_URL, // Use process.env to access the environment variable
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '/api/v1')
//       }
//     }
//   }
// });

export default defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8000', // Base URL of your API server
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/api/v1/users')
        }
      }
    }
  });

