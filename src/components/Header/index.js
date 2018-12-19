import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">index</Link>
      <br></br>
      <Link to="/login">login</Link>
    </div>
  )
}

export default Home;