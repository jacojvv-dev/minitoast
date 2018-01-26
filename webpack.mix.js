let mix = require('laravel-mix');

mix.js('src/js/minitoast.js', 'dist/js/')
    .js('src/js/demo.js', 'dist/js/')
    .sass('src/scss/minitoast.scss', 'dist/css/')
    .sass('src/scss/minitoast-block-card.scss', 'dist/css/');