import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import EventScreen from "./screens/EventScreen";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Router>
      <Header></Header>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/projects/:id" component={ProjectScreen} exact></Route>
      <Route path="/events/:id" component={EventScreen} exact></Route>
    </Router>
  );
};

export default App;
