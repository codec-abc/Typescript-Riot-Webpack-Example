module.exports = {  
  entry: './app.js',
  devtool: 'source-map',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tag']
  },
  module: {
    loaders: 
    [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.tag$/, loader: 'tag' }
    ]
  }
}