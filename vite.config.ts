import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env.NODE_ENV': '"production"'
    },
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'LuminaSlides',
            fileName: 'lumina-slides',
        },
        rollupOptions: {
            // Externalize chart.js - it's optional and heavy (~200KB)
            external: ['chart.js'],
            output: {
                globals: {
                    'chart.js': 'Chart'
                }
            },
        },
    },
})
