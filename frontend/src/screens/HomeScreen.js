import React from "react";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";
import Events from "../components/Events";

const HomeScreen = () => {
  return (
    <>
      <Introduction></Introduction>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Events></Events>
    </>
  );
};

export default HomeScreen;
