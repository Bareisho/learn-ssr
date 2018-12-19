import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//通过路由渲染组件
import Routes from "../router/index.js";

import getStore from "../store";

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        { Routes }
      </BrowserRouter>
    </Provider>
  )
}
//ReactDom.render(<Home />, document.querySelector("#root"));
//服务端渲染后不再用render函数，改用hydrate
ReactDom.hydrate(<App />, document.querySelector("#root"));