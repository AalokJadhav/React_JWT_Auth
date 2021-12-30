import React from "react";

const Home = (props: {name: String}) => {

  return <>{props.name ? "Hi " + props.name : "You are not logged in"}</>;
};

export default Home;
