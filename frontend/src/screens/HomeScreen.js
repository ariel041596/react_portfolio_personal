import React, { useEffect, useRef } from "react";
import Introduction from "../components/Introduction";
import Project from "../components/Project";
import About from "../components/About";
import Service from "../components/Service";
import Event from "../components/Event";
import Contact from "../components/Contact";

import useScrollSnap from "react-use-scroll-snap";
import { Scrollbars } from "react-custom-scrollbars";

import Meta from "../components/Meta";

const HomeScreen = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 10 });
  return (
    <>
      <Meta></Meta>
      <div ref={scrollRef}>
        <Introduction></Introduction>
        <About></About>
        <Service></Service>
        <Project></Project>
        <Event></Event>
        <Contact></Contact>
      </div>
    </>
  );
};

export default HomeScreen;
