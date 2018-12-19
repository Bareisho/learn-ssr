import express from "express";
import Home from "../containers/Home";
import React from "react";                      //<Home />是JSX语法，必须要引入react才能解析
import { renderToString } from "react-dom/server";
const app = express();
app.use(express.static("public"));
const content = renderToString(<Home />);
app.get("/", (req, res) => {
  res.end(
  `<html>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    <body>
    </htm>
  `
  );
})
app.listen(3000);