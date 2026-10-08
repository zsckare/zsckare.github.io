import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Root base works for a username.github.io repository.
// For a project repository, set VITE_BASE_PATH=/repository-name/.
export default defineConfig({ plugins: [react()], base: process.env.VITE_BASE_PATH || '/' });
