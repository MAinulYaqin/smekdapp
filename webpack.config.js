let {join} = require('path')

module.exports = {
    entry: join(__dirname, 'sauce', 'index.js'),
    output: {
        path: join(__dirname, 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['react', 'stage-3']
             }
          }
        ]
    }
}
