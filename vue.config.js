module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
devServer: {
  proxy: {
    // proxy all requests starting with /api to target
    'ocr': {
      target: 'https://image2text.narr.ng',
      changeOrigin: true,
      pathRewrite: {
        '^/ocr': ''
      }
    },
    'doc': {
      target: 'https://doc2pdf.narr.ng',
      changeOrigin: true,
      pathRewrite: {
        '^/doc': ''
      }
    },
    'water': {
      target: 'https://shamskhalil.ngrok.io',
      changeOrigin: true,
      pathRewrite: {
        '^/water': ''
      }
    },
  }
}
}
//['https://shamskhalil.ngrok.io/tika/form']
//'https://image2text.narr.ng'
// https://doc2pdf.narr.ng/