import {defineConfig, loadEnv} from 'vite'
import react, {reactCompilerPreset} from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import pkg from './package.json' with {type: 'json'}

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: env.BASE_PATH || process.env.BASE_PATH || `/${pkg.name}/`,

        plugins: [
            react(),
            tailwindcss(),
            babel({presets: [reactCompilerPreset()]})
        ],
    }
})
