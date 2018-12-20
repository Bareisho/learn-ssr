const defaultState = {
  name: "hello1",
  list: []
}
import HOME_LIST from "./constants";

//从action接受
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HOME_LIST:   
      const newSate = {
        ...state,
        list: action.list
      }
      return newSate;
    default:
      return state;
  }
}
export default reducer;