// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,vue}',
    ],
    theme: {
        colors: {
            'primary': '#DB6060',
            'secondary': '#DF7070',
            'tertiary': '#E28080',
            'quaternary': '#E69090',
            'quinary': '#E9A0A0',
            'senary': '#EDB0B0',
            'septenary': '#F1BFBF',
            'octonary': '#F4CFCF',
            
        }
    },
    plugins: [],
}

export default config