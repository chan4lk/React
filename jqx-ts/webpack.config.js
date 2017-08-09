const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const findEslintFile = (options) => {
  if (options.eslintFile) {
    if (fs.existsSync(options.eslintFile)) {
      console.log(`using custom eslint file at ${options.eslintFile}`);
      return options.eslintFile;
    }

    console.warn(`custom eslint file not found at ${options.eslintFile}`);
  }

  const rootEslint = path.resolve('./.eslintrc');
  if (fs.existsSync(rootEslint)) {
    console.log(`using custom eslint file at ${rootEslint}`);
    return rootEslint;
  }

  // default internal file
  return path.join(__dirname, '.eslintrc');
};

module.exports = (options) => {
  const config = {
    resolve: {
      modules: [
        'node_modules',
        path.join(__dirname, 'node_modules')
      ],
      extensions: ['.js', '.jsx', '.json']
    },
    entry: options.entryPoints,
      // 'react-hot-loader/patch',
      // // activate HMR for React

      // 'webpack-dev-server/client?http://localhost:3000',
      // // bundle the client for webpack-dev-server
      // // and connect to the provided endpoint

      // 'webpack/hot/only-dev-server',
      // // bundle the client for hot reloading
      // // only- means to only hot reload for successful updates
    output: {
      path: path.join(options.outputDir),
      publicPath: '/static/',
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: require.resolve('eslint-loader'),
          query: {
            configFile: findEslintFile(options)
          }
        },
        {
          test: /\.(ts|tsx)$/,
          loaders: [require.resolve('babel-loader'), require.resolve('ts-loader')],
          exclude: /node_modules/
        },
        {
          test: /\.(js|jsx)$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates

      new webpack.NoEmitOnErrorsPlugin(),
      // do not emit compiled assets that include errors
    ],
    devtool: 'cheap-source-map',
    performance: {
      maxAssetSize: 1500000,
      maxEntrypointSize: 1500000
    },
    devServer: {
      host: 'localhost',
      port: 3000,

      historyApiFallback: true,
      // respond to 404s with index.html

      hot: true,
      // enable HMR on the server
    },
  };

  return config;
};
