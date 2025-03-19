import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	optimizeDeps: {
		include: ['msw']
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/testSetup.ts'],
		coverage: {
			thresholds: {
				statements: 60,
				functions: 80,
				branches: 60,
				lines: 75
			},
			exclude: [
				'src/main.tsx',
				'src/router/**',
				'**/*.config.js',
				'**/*.config.ts',
				'**/index.ts',
				'**/type.ts',
				'**/index.ts',
				'**/*.d.ts'
			]
		}
	}
})
