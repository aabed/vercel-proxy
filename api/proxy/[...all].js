const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'http://18.212.250.130',
  changeOrigin: true,
  pathRewrite: (path, req) => path, // Pass the path as-is
});

module.exports = (req, res) => {
  return proxy(req, res);
};
