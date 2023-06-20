require('dotenv').config();

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const mode = process.env.NODE_ENV;
const isProductionMode = mode === 'production';
const isInject = process.env.INJECT === 'true';

const paths = {
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public'),
  output: path.resolve(__dirname, 'dist'),
  watchFiles: path.resolve(__dirname, 'src/**/*'),
  include: path.resolve(__dirname, 'src'),
  entry: {
    index: path.resolve(__dirname, 'src/app/index.ts'),
    home: path.resolve(__dirname, 'src/pages/home/index.ts'),
    about: path.resolve(__dirname, 'src/pages/about/index.ts'),
  },
  template: {
    index: path.resolve(__dirname, 'public/index.html'),
    about: path.resolve(__dirname, 'public/about.html'),
  },
};

module.exports = {
  mode,

  devtool: !isProductionMode && 'source-map',

  target: isProductionMode ? 'browserslist' : 'web',

  devServer: {
    hot: true,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT_1 || 4009,
    watchFiles: {
      paths: ['./public/**/*', './src/**/*'],
      options: {
        ignored: '/node_modules/',
        usePolling: true,
      },
    },
  },

  watchOptions: {
    poll: 1000,
    aggregateTimeout: 200,
    ignored: /node_modules/,
  },

  entry: paths.entry,

  output: {
    filename: 'js/[name].js',
    path: paths.output,
  },

  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.js', '.ts'],
      }),
    ],
  },

  module: {
    rules: [
      // [t|j]s
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },

      // [s]css
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          isInject || !isProductionMode
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../' },
              },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      // img
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },

      // svg
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'svg/[name][ext]',
        },
      },

      // fonts
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: paths.template.index,
      chunks: ['index', 'home'],
    }),
    new HTMLWebpackPlugin({
      filename: 'about.html',
      template: paths.template.about,
      chunks: ['index', 'about'],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
