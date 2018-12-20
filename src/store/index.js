import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";
//拆分各个组件的store，进行模块化处理
const reducer = combineReducers({
  home: homeReducer
})
// const reducer = (state = defaultState, action) => {
//   return state;
// }

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