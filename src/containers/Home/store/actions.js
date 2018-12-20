import axios from "axios";
import HOME_LIST from "./constants";

const changeList = (data) => {
  return {
    type: HOME_LIST,
    list: data
  }
}
const actions = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/json/list.json").then((res) => {
      const data = res.data.data;
      dispatch(changeList(data))//action dispatch reducer
    }).catch(err => {
      console.log(err);
    })
  }
}
export default actions;