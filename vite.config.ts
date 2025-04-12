import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			fileName: (format) => `index.${format}.js`,
			formats: ['es', 'cjs'],
			name: 'regla-monorepo'
		},
		rollupOptions: {
			external: ['react', 'react-dom', '@chakra-ui/react'],
			output: {
				globals: {
					'@chakra-ui/react': 'ChakraUI',
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		}
	},
	plugins: [
		dts({
			exclude: ['**/*.stories.tsx', 'src/test', '**/*.test.tsx'],
			include: ['src'],
			insertTypesEntry: true,
			outDir: 'dist',
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json'
		}),
		react(),
		tsconfigPaths(),
		checker({
			eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
			typescript: true
		})
	]
})
