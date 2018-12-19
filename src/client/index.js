import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

//通过路由渲染组件
import Routes from "../router/index.js";
//import Home from "../containers/Home";

const App = () => {
  return (
    <BrowserRouter>
      { Routes }
    </BrowserRouter>
  )
}
//ReactDom.render(<Home />, document.querySelector("#root"));
//服务端渲染后不再用render函数，改用hydrate
ReactDom.hydrate(<App />, document.querySelector("#root"));