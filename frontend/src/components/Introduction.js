import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: "-20px",
    backgroundColor: "#1D1D1D",
    // backgroundColor: "#343A40",
    height: "100vh",
  },
  title: {
    marginRight: "12px",
    cursor: "pointer",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  hi: {
    paddingTop: theme.spacing(20),
    marginLeft: "15px",
    color: "white",
  },
  motto: {
    color: "white",
  },
  role: {
    color: "white",
    fontSize: "6vw",
    // fontSize: "50px",
  },
  typewrite: {},
}));

const Introduction = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  const classes = useStyles();
  const url =
    "https://drive.google.com/file/d/1E16PytuFHC8UNLsX0y0v1vM5U-b5KoqD/view";

  const viewCV = () => {
    window.open(url, "_blank").focus();
  };

  return (
    <section className={classes.section}>
      <Container>
        <Typography
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          className={classes.hi}
          variant="h3"
          noWrap
        >
          Hi I'm
        </Typography>
        <Typography
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className={classes.title}
          variant="h1"
          noWrap
        >
          Ariel
        </Typography>

        <Typography
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className={classes.motto}
          variant="h5"
        >
          "I am eager to learn everything as I am willing also to be trained"
        </Typography>

        {count ? (
          <Typist
            className={classes.role}
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            avgTypingDelay={150}
            onTypingDone={() => setCount(0)}
          >
            <Typist.Delay ms={1000}></Typist.Delay>
            <span> Web Developer</span>
            <Typist.Backspace count={20} delay={1000} />
            <span> Mobile Developer</span>
            <Typist.Backspace count={20} delay={1000} />
          </Typist>
        ) : (
          ""
        )}
        <Button variant="outlined" color="primary" onClick={viewCV}>
          View my CV
        </Button>
      </Container>
    </section>
  );
};

export default Introduction;
