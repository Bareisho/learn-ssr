import React from "react";                      //JSX语法，必须要引入react才能解析
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom"; //服务端渲染用的路由。新增Route
//import Route from "../router/index.js"; //修改为一个数组
import routes from "../router";
import { Provider } from "react-redux";
import getStore from "../store";

export const render = (req) => {
  /* 
  location: 路径
  context:
  */
  const content = renderToString(
    (
      <Provider store={getStore()}>
        <StaticRouter context={{}} location={req.path}>
          { /* 遍历数组，StaticRouter只能有一个child，用div包裹 */ }
          <div>
          {
            routes.map(route => (
            <Route {...route} />
            ))
          }
          </div>
        </StaticRouter>
      </Provider>
    )
  )
  return `<html>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    <body>
    </html>`;
};