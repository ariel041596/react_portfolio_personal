import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Screens
import HomeScreen from "./screens/HomeScreen";

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
    </Router>
  );
};

export default App;
