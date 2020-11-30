module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      // Allow our proxy to handle our requests
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
        target: 'https://water.narr.ng',
        changeOrigin: true,
        pathRewrite: {
          '^/water': ''
        }
      },
      'upload': {
        target: 'https://narr.ng/api/v1/research/upload',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': ''
        }
      },
      'research': {
        target: 'https://narr.ng/api/v1/research',
        changeOrigin: true,
        pathRewrite: {
          '^/research': ''
        }
      }
    }
  }
}
