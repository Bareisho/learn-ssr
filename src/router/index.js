//导出的内容改为数组，没必要再导入react
/* import React from "react";
import { Route } from "react-router-dom"; */

import Home from "../containers/Home";
import Login from "../containers/Login";

//修改为服务端渲染，参考react-router官网server rendering
//导出一个路由数组，新增loadData方法，在加载路由时会先调用loadData方法
const routes = [{
  key: "home",             //数组用于遍历，需要一个key值
  path: "/",
  exact: true,
  component: Home,
  loadData: Home.loadData //loadData的值为自定义方法
}, {
  key: "login",
  path: "/login",
  exact: true,
  component: Login
}]
export default routes;
//exact精确匹配
/* export default (
  <div>
    <Route path="/" exact component={ Home }></Route>
    <Route path="/login" exact component={ Login }></Route>
  </div>
) */