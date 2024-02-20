import { defineConfig } from 'vite';
import laravel from "laravel-vite-plugin";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/views/**"
            ],
            buildDirectory: ".public/assets/global",
            refresh: true,
            hotFile: "cache/vite/hot",
        }),
    ],
    build: {
        manifest: true,
        rollupOptions: {
            input: "./public/index.html",
        },
    },
    server: {
        origin: 'http://localhost:8000'
    },
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
});
