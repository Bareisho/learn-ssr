import React from "react";                      //JSX语法，必须要引入react才能解析
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom"; //服务端渲染用的路由
import Route from "../router/index.js";

export const render = (req) => {
  /* 
  location: 路径
  context:
  */
  const content = renderToString(
    (
      <StaticRouter context={{}} location={req.path}>
        { Route }
      </StaticRouter>
    )
  )
  return `<html>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    <body>
    </html>`;
};