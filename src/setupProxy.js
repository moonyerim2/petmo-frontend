const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v2", {
      target: "https://petmo-back-seed-db-lqoa.onrender.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
