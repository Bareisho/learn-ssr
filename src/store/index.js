import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const defaultState = {
  name: "hello"
};

const reducer = (state = defaultState, action) => {
  return state;
}

/* export const store = createStore(
  reducer,
  applyMiddleware(thunk)   //使用thunk中间件
) */
//避免store污染，返回一个函数创建副本
const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk)   //使用thunk中间件
  )
}
export default getStore;