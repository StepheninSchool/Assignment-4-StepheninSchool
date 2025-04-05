import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Note Taker',
        short_name: 'Notes',
        description: 'Offline Notes App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/app-development.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/app-development2.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
          },
          {
            urlPattern: ({ request }) =>
              ['style', 'script', 'worker'].includes(request.destination),
            handler: 'CacheFirst',
          },
        ],
      },
    }),
  ],
});
  

