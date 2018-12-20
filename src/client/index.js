import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";//。新增Route
import { Provider } from "react-redux";
//通过路由渲染组件
//import Route from "../router/index.js"; //修改为一个数组
import routes from "../router";

import getStore from "../store";

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        { /* 遍历数组，BrowserRouter只能有一个child，用div包裹 */ }
        <div>
          {
            routes.map(route => (
              <Route {...route} />
            ))
          }
        </div>
      </BrowserRouter>
    </Provider>
  )
}
//ReactDom.render(<Home />, document.querySelector("#root"));
//服务端渲染后不再用render函数，改用hydrate
ReactDom.hydrate(<App />, document.querySelector("#root"));