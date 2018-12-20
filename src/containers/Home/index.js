import React, { Component } from "react";
import Header from "../../components/Header";

import { connect } from "react-redux";  //使用store

import { actions as getHomeList } from "./store";
//无状态组件转为正常组件
class Home extends Component {
  
  render() {
    const {name, list} = this.props;
    const setList = () => {
      return list.map((element) => {
        return <div key={element.id}> {element.content}</div>
      })
    }
    return (
      <div>
        <Header />
        <h1>{ name }, world</h1>
          {
            setList()
          }
      </div>
    )
  }
  componentDidMount() {//只在客户端触发
    this.props.getList();
  }
}
/* const Home = (props) => {
  return (
    <div>
      <Header />
      <h1>{ props.name }, world</h1>
      <button onClick={()=> {alert("hello")}}>click</button>
    </div>
  )
} */
const mapStateToProps = (state) => {
  return {
    list: state.home.list,
    name: state.home.name
  }
}
const mapDispatchToProps = (dispatchEvent) => ({
  getList() {
    dispatchEvent(getHomeList());
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);