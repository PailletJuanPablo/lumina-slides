import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env.NODE_ENV': '"production"'
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'LuminaSlides',
            fileName: 'lumina-slides',
        },
        rollupOptions: {
            // Vue is now bundled!
            output: {
                // No globals needed
            },
        },
    },
})
