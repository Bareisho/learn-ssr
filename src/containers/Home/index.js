import React from "react";
import Header from "../../components/Header";

import { connect } from "react-redux";  //使用store

const Home = (props) => {
  return (
    <div>
      <Header />
      <h1>{ props.name }, world</h1>
      <button onClick={()=> {alert("hello")}}>click</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}
export default connect(mapStateToProps, null)(Home);