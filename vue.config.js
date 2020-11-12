module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
//   devServer: {
//     proxy: 'https://shamskhalil.ngrok.io/tika/form',
// }
devServer: {
  proxy: {
    // proxy all requests starting with /api to jsonplaceholder
    'api': {
      target: 'http://192.168.1.4:4000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
}
//['http://localhost:3000/','http://localhost:3003/']