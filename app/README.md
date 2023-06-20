> Настройки скриптов и шаблонов в `webpack.config.js`
 ```js
    const paths = {
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public'),
        output: path.resolve(__dirname, 'dist'),
        watchFiles: path.resolve(__dirname, 'src/**/*'),
        include: path.resolve(__dirname, 'src/js'),
    
        // Точки входа скриптов
        entry: {
            index: path.resolve(__dirname, 'src/js/index.ts'),
            about: path.resolve(__dirname, 'src/js/index.ts'),
        },
        
        // Шаблоны
        template: {
            index: path.resolve(__dirname, 'public/index.html'),
            about: path.resolve(__dirname, 'public/about.html'),
        },
    };

    // добавление шаблонов
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: paths.template.index,
            chunks: ['index'],
        }),
        new HTMLWebpackPlugin({
            filename: 'about.html',
            template: paths.template.about,
            chunks: ['about'],
        }),
    ]
```

### Includes packages

- scss
- babel
- axios
- eslint
- lodash
- postcss
- prettier
- onChange
- typescript
- autoprefixer
- normalize.css
- @fontsource/ubuntu
- @fontsource/material-icons

### Links
- Webpack watch options - https://webpack.js.org/configuration/watch
- Webpack web server - https://webpack.js.org/configuration/dev-server

### Process 
1. `make build`
2. `make up`
3. `~app make install`
4. `~app make server`
5. `~app make build-dev` no minify
6. `~app make build-prod` minify
