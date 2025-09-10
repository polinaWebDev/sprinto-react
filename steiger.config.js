import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
    ...fsd.configs.recommended,
    {
        files: ['./src/shared/**'],
        rules: {
            'fsd/public-api': 'off',
            'fsd/forbidden-imports': 'off',
            'fsd/no-public-api-sidestep': 'off',
        },
        ignores: [
            './src/shared/helpers/**',
            './src/shared/utils/**',
            './src/shared/api/generated/**',
        ],
    },
    {
        files: ['./src/app/routes/**'],
        rules: {
            'fsd/no-public-api-sidestep': 'off',
        },
    },

])