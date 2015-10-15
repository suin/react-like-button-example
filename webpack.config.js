module.exports = {
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "like-button.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader?stage=0"}
    ]
  }
};
