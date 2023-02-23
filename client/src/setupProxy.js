// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(
//     "/api/cable",
//     createProxyMiddleware({
//       target: "ws://localhost:3000",
//       ws: true,
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://localhost:3000",
//       changeOrigin: true,
//     })
//   );
// };
