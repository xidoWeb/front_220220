// webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main : './js/src/use.js'
  },
  output:{
    path: path.resolve("./dist"),
    filename: "[name].js"
  }
}
