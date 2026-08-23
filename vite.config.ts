import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	base: '/',
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
			'@/app': path.resolve(import.meta.dirname, './src/app'),
			'@/pages': path.resolve(import.meta.dirname, './src/pages'),
			'@/widgets': path.resolve(import.meta.dirname, './src/widgets'),
			'@/features': path.resolve(import.meta.dirname, './src/features'),
			'@/entities': path.resolve(import.meta.dirname, './src/entities'),
			'@/shared': path.resolve(import.meta.dirname, './src/shared'),
		},
	},
});
