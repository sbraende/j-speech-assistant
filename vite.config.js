import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        tv_rom: 'src/html/tv_rom.html',
        favorites: 'src/html/favorites.html',
        food_and_drink: 'src/html/food_and_drink.html',
        health: 'src/html/health.html',
      },
    },
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],

      manifest: {
        name: 'J-Speech-Assistant',
        short_name: 'J-Speech',
        description: 'J-Speech helps people with speech diffuclties communicate',
        theme_color: '#333333',
      },

      icons: [
        {
          src: 'assets/images/favicon_io/android-chrome-192x192.png',
          size: '192x192',
          type: 'image/png'
        },
        {
          src: 'assets/images/favicon_io/android-chrome-512x512.png',
          size: '512x512',
          type: 'image/png'
        },
        {
          src: 'assets/images/favicon_io/android-chrome-512x512.png',
          size: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'assets/images/favicon_io/android-chrome-512x512.png',
          size: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,mp3,ttf}'],
        clientsClaim: true,
        skipWaiting: true,
        }
      }
    )
  ],
}
)