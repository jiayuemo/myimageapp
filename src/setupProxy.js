const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * React scripts necessarily needs the setupProxy file in this format for it to integrate with webpack during bundling
 * @param {*} app 
 */
module.exports = function (app) {
  app.use('/image-search', createProxyMiddleware({
    target: process.env.npm_config_image_search_url,
    secure: true,
    changeOrigin: true,
    pathRewrite: {
      '^/image-search': '',
    },
  }));
};
