import React from "react";
import Introduction from "../components/Introduction";
import Project from "../components/Project";
import About from "../components/About";
import Service from "../components/Service";
import Event from "../components/Event";
import Contact from "../components/Contact";

const HomeScreen = () => {
  return (
    <>
      <Introduction></Introduction>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Event></Event>
      <Contact></Contact>
    </>
  );
};

export default HomeScreen;
