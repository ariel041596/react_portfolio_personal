import React, { useEffect, useRef } from "react";
import Introduction from "../components/Introduction";
import Project from "../components/Project";
import About from "../components/About";
import Service from "../components/Service";
import Event from "../components/Event";
import Contact from "../components/Contact";

import useScrollSnap from "react-use-scroll-snap";
import Scrollspy from "react-scrollspy";

import Meta from "../components/Meta";

const HomeScreen = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 10 });
  return (
    <>
      <Meta></Meta>
      <Scrollspy
        className="scrollspy"
        items={["/", "about", "stack", "projects", "events", "contact"]}
        currentClassName="isCurrent"
      >
        <li>
          <a href="#/">Introduction</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#stack">Stack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </Scrollspy>
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
