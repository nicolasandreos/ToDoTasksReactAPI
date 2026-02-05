import jsonServer from "json-server";
import fs from "fs";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(
  JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "db.json"), "utf-8")
  )
);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

export default function handler(req, res) {
  server(req, res);
}
