// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   //   app.use(
//   //     "/api/cable",
//   //     createProxyMiddleware({
//   //       target: "http://127.0.0.1:3000/api/cable",
//   //       ws: true,
//   //       changeOrigin: true,
//   //     })
//   //   );

//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://127.0.0.1:3000",
//       changeOrigin: true,
//     })
//   );
// };
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/cable",
    createProxyMiddleware({
      target: "ws://localhost:3000",
      ws: true,
      changeOrigin: true,
    })
  );
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
};
