var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  // on production we don't provide sourcemapping
  devtool: debug ? "inline-sourcemap" : null,
  // where we start:
  entry: "./js/scripts.js",
  // output file path and name:
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  // If debug, do nothing, else if production, run these minification tasks
  plugins: debug ? [] : [
    // Strip out dupe code:
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // Get rid of sourcemaps and comments and such:
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
