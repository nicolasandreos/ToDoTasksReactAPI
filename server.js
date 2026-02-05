import jsonServer from "json-server";
// import fs from "fs";
// import path from "path";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const router = jsonServer.router(
//   JSON.parse(
//     fs.readFileSync(path.join(process.cwd(), "db.json"), "utf-8")
//   )
// );
const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(jsonServer.rewriter({
  "/*": "/$1",
}));

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

module.exports = server;