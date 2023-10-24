// webpack.config.js
module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: "./dist/", // você pode nomear isso como quiser, mas vamos deixar como 'dist'
    filename: "main.js", // você também pode nomear isso como quiser, mas vamos deixar como 'main.js'
    publicPath: ""
  }
}

// A sintaxe para exportar no Node.js é module.exports