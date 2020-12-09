// const httpProxyMiddleware = require('http-proxy-middleware');

module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      // Allow our proxy to handle our requests
      ocr: {
        target: "https://image2text.narr.ng/tika/form",
        changeOrigin: true,
        pathRewrite: {
          "^/ocr": "",
        },
      },
      doc: {
        target: "https://doc2pdf.narr.ng/convert/office",
        changeOrigin: true,
        pathRewrite: {
          "^/doc": "",
        },
      },
      upload: {
        target: "https://narr.ng/api/v1/research/upload",
        changeOrigin: true,
        pathRewrite: {
          "^/upload": "",
        },
      },
      research: {
        target: "https://narr.ng/api/v1/research",
        changeOrigin: true,
        pathRewrite: {
          "^/research": "",
        },
      },
      socketServer: {
        target: "https://api.narr.ng",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/socketServer": "",
        },
      },
    },
    //   after(app) {
    //     const wsProxy = httpProxyMiddleware({
    //         target: 'https://api.narr.ng',
    //         changeOrigin: true,
    //         ws: true
    //     });
    //     app.use('/socketServer', wsProxy);
    // }
  },
};
