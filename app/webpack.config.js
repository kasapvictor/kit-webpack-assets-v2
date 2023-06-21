const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const mode = process.env.NODE_ENV;
const isProductionMode = mode === 'production';

const entries = {
  home: path.resolve(__dirname, 'src/pages/home/index.ts'),
  about: path.resolve(__dirname, 'src/pages/about/index.ts'),
};

const html = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'public/index.html'),
    chunks: ['home'],
  }),
  new HtmlWebpackPlugin({
    filename: 'about.html',
    template: path.resolve(__dirname, 'public/about.html'),
    chunks: ['about'],
  }),
];

module.exports = {
  devServer: {
    // hot: true,
    compress: true,
    port: process.env.PORT || 4009,
    host: process.env.HOST || '0.0.0.0',
    static: path.join(__dirname, 'public'),
    watchFiles: [path.join(__dirname, 'public/**/*')],
  },
  mode,
  devtool: !isProductionMode && 'source-map',
  target: isProductionMode ? 'browserslist' : 'web',
  entry: entries,
  output: {
    clean: true,
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: isProductionMode ? false : 'single',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'svg/[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.js', '.ts'],
      }),
    ],
  },
  plugins: [
    ...html,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/**/*.css',
          to({ absoluteFilename }) {
            return 'css/' + path.basename(absoluteFilename);
          },
        },
        {
          from: './public/img/*.{png,jpg,jpeg,svg}',
          to({ absoluteFilename }) {
            return 'img/' + path.basename(absoluteFilename);
          },
        },
      ],
    }),
  ],
};
