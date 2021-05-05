import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

import dotenv from "dotenv";

dotenv.config();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    color: "#A59D7D",
  },
  section: {
    marginTop: "-20px",
    backgroundColor: "#1D1D1D",
    height: "100vh",
  },
  title: {
    color: "#E0E0E0",
    paddingTop: theme.spacing(4),
  },
  titleOpening: {
    fontSize: "30px",
    // position: "relative",
    top: "-20px",
  },
  titleMid: {
    padding: theme.spacing(3),
    fontSize: "8vw",
  },
  titleClosing: {
    fontSize: "30px",
    // position: "relative",
    top: "-20px",
  },
  hi: {
    marginLeft: "15px",
    color: "#ffffff",
    marginTop: "50px",
  },
  findme: {
    marginLeft: "15px",
    color: "#ffffff",
    marginTop: "100px",
  },
  label: {
    marginLeft: "12px",
    paddingTop: "20px",
    color: "#0D0D0D",
    fontSize: "18px",
  },
  large: {
    width: "100%",
    maxWidth: "60px",
    height: "auto",
    // marginTop: "20px",
    margin: "20px 10px 0 10px",
  },
  icon: {
    color: "#ffffff",
  },
}));
const githubURL = process.env.GITHUB_URL;
const linkedInURL = process.env.LINKED_IN_URL;
const Contact = () => {
  const github = "https://github.com/ariel041596";
  const linkedIn = "https://www.linkedin.com/in/ariel-espinoza-4044a8200";
  const classes = useStyles();
  const viewGithub = () => {
    window.open(github, "_blank").focus();
    console.log(githubURL, linkedInURL);
  };
  const viewLinkedIn = () => {
    window.open(linkedIn, "_blank").focus();
  };
  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.root}>
          <span className={classes.titleOpening}>{" < "}</span>
          <span className={classes.titleMid}>{" CONTACT me "}</span>
          <span className={classes.titleClosing}>{" /> "}</span>
        </div>
        <Typography
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          variant="h5"
        ></Typography>
        <Typography
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className={classes.hi}
          variant="h4"
        >
          Let's make something great together. It's time to make your ideas
          happen to be greater product
        </Typography>
        <div className={classes.findme}>
          <Typography data-aos="fade-right" variant="h5">
            Find me on:
          </Typography>
          <IconButton
            onClick={viewGithub}
            className={classes.icon}
            aria-label="upload picture"
            component="span"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            onClick={viewLinkedIn}
            className={classes.icon}
            aria-label="upload picture"
            component="span"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
