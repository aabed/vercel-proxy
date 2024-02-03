const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware({
  target: 'http://18.212.250.130',
  changeOrigin: true,
  pathRewrite: (path, req) => {
    // Do not rewrite the path, pass it as-is
    return path;
  },
});
