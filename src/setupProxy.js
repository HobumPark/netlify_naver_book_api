const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/v1/search/book.json?query=*', {
			target: 'https://openapi.naver.com', 
			changeOrigin: true,
		})
	);
};