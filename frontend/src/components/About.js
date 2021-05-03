import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  section: {
    marginTop: "-20px",
    backgroundColor: "#ffffff",
    height: "100vh",
  },
  title: {
    color: "#E0E0E0",
    paddingTop: theme.spacing(4),
  },
  titleOpening: {
    color: "#E0E0E0",
    fontSize: "30px",
    // position: "relative",
    top: "-20px",
  },
  titleMid: {
    color: "#E0E0E0",
    padding: theme.spacing(3),
    fontSize: "8vw",
  },
  titleClosing: {
    color: "#E0E0E0",
    fontSize: "30px",
    // position: "relative",
    top: "-20px",
  },
  hi: {
    marginLeft: "15px",
  },
  label: {
    marginLeft: "12px",
    paddingTop: "20px",
    color: "#0D0D0D",
    fontSize: "18px",
  },
}));

const first = "Learning new skills is always my objective";

const second =
  "Coding kept my mind busy and even awake that it feels like dreaming while not in sleep, but learning skills are like a quest on myself that will leads to success. What I began as interest blossomed into a full-on passion. I have a strong analytical skills that I regulary put into practice through reading documentation, deep learning and determined in terms of work, and give my very best to situational problems";

const third =
  "I dont have a huge portfolio of live work at the moment but I do have a few live demos and screenshots of some of my projects in design and production";

const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.root}>
          <span className={classes.titleOpening}>{" < "}</span>
          <span className={classes.titleMid}>{" ABOUT "}</span>
          <span className={classes.titleClosing}>{" /> "}</span>
        </div>
        <Typography
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          variant="h5"
        ></Typography>
        <Typography className={classes.hi} variant="h3">
          Greetings!
        </Typography>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          style={{
            borderLeft: "6px solid black",
            height: "300px",
            textAlign: "justify",
          }}
        >
          <p className={classes.label}>{first}</p>
          <p className={classes.label}>{second}</p>
          <p className={classes.label}>{third}</p>
        </div>
      </Container>
    </section>
  );
};

export default About;
