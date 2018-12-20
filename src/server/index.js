import express from "express";
import { render } from "./utils.js";
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  //res.end(render(req));
  //等到数据异步请求结束再渲染
  render(req, res)
})
app.listen(3000);