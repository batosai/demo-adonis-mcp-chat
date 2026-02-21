import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import adonisjs from '@adonisjs/vite/client'
import inertia from '@adonisjs/inertia/vite'

export default defineConfig({
  plugins: [
    vue(),
    inertia({ ssr: { enabled: false, entrypoint: 'inertia/ssr.ts' } }),
    adonisjs({ entrypoints: ['inertia/app.ts'], reload: ['resources/views/**/*.edge'] }),
    ui({
      router: 'inertia',
    }),
  ],

  optimizeDeps: {
    include: [
      '@nuxt/ui > prosemirror-state',
      '@nuxt/ui > prosemirror-transform',
      '@nuxt/ui > prosemirror-model',
      '@nuxt/ui > prosemirror-view',
      '@nuxt/ui > prosemirror-gapcursor',
    ],
  },

  resolve: {
    alias: {
      '~/': `${import.meta.dirname}/inertia/`,
      '@generated': `${import.meta.dirname}/.adonisjs/client/`,
    },
  },
})
