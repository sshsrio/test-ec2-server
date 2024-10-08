const Router = require("koa-router");

const routes = new Router();

routes.get("/health", (ctx) => {
  ctx.body = { message: "Server is running" };
});

module.exports = routes;
