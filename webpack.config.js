const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?/ ,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }],
                      '@babel/preset-react'
                    ]
                  }
                }
              }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'client/dist'),
            publicPath: '/'
        },
        hot: true,
        historyApiFallback: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: {
            '/api/**': {
              target: 'http://localhost:3000/',
              secure: false,
            },
            '/assets/**': {
              target: 'http://localhost:3000/',
              secure: false,
            },
          },
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, 'client', 'src', 'index.html')
    })],
};