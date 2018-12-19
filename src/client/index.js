import React from "react";
import ReactDom from "react-dom";
import Home from "../containers/Home";

//ReactDom.render(<Home />, document.querySelector("#root"));
//服务端渲染后不再用render函数，改用hydrate
ReactDom.hydrate(<Home />, document.querySelector("#root"));