const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/api', '/pizza/detail/api', '/element/api', '/action/api'],
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/pizza/detail': '',
        '^/element': '',
        '^/action': '',
      },
    })
  );
};
