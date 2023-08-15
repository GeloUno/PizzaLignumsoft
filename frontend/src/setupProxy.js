const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    [
      '/api',
      '/pizza/detail/api',
      '/pizza/detail/*/api',
      '/element/api',
      '/element/*/api',
      '/action/api',
      '/action/*/api',
    ],
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/pizza/detail/api': '/api',
        '^/pizza/detail/*/api': '/api',
        '^/element/api': '/api',
        '^/element/*/api': '/api',
        '^/action/api': '/api',
        '^/action/*/api': '/api',
      },
    })
  );
};
