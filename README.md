# Modular-Vite

A configuration to use Vite with PHP and TailwindCSS to refresh the browser when a file is changed. Base on Laravel vite plugin.

## Installation

```bash
npm install
```

## Usage

First run Tailwindcss to watch for changes in the CSS of your templates files.

```bash
npm run tail-watch
```

The templates files are in the `resources/views` directory.
The base css file is in `resources/css/app.css`.
The build css file is in `public/css/app.css`.

Then run Vite to watch for changes in the JS files.

```bash
npm run dev
```

You only need the `@vite/client` in your main layout(s) `resources/views/layouts/app.layout.php` file. [ver más](https://vitejs.dev/guide/backend-integration.html)

Finally, run the PHP server.

```bash
php -S localhost:8000
```

Let the all three commands running and start coding.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

[Laravel Vite](https://laravel.com/docs/10.x/vite)
[bytes4run](https://bytes4run.com/)