module.exports = {
  entry: './client/components/boot.jsx',
  output: {
    filename: 'public/js/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  plugins: []
};

