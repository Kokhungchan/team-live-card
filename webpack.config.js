const path = require('path');

module.exports = {
  entry: './src/team-live-card.js',
  output: {
    filename: 'team-live-card.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: "> 0.25%, not dead" // Set target for broad browser support
              }]
            ]
          }
        }
      }
    ]
  },
  mode: 'production'
};
