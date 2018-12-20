import React from "react";                      //JSX语法，必须要引入react才能解析
import { renderToString } from "react-dom/server";
//import { StaticRouter, Route, matchPath  } from "react-router-dom"; //服务端渲染用的路由。新增Route。新增路由匹配
import { StaticRouter, Route  } from "react-router-dom";  //路由匹配改为第三方react-router-config
import { matchRoutes } from "react-router-config";
//import Route from "../router/index.js"; //修改为一个数组
import routes from "../router";
import { Provider } from "react-redux";
import { getStore } from "../store";

export const render = (req, res) => {
  
  /* server的store应该事先获取数据
  获取对应路由的数据即可
  获取方法参考react-router server rendering的demo
  let matached = []; */

  //更改为react-router-config
  let matched =  matchRoutes(routes, req.path);
  /* routes.some(route => {
    // use `matchPath` here
    const match = matchPath(req.path, route);
    if (match) {
      matached.push(route);
    }
  }); */
  
  const store = getStore();
  //用Promise处理ajax异步请求
  let asyncMethods = [];
  matched.forEach(item => {
    let method = item.route.loadData;
    if(method) {
      asyncMethods.push(method(store));
    }
  })
  Promise.all(asyncMethods).then(() => {
    const content = renderToString(
      (
        <Provider store={store}>
          <StaticRouter context={{}} location={req.path}>
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
    
    res.end(`<html>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      <body>
      </html>`
    );
  })
  
};