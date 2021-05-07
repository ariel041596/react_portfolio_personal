import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import images from "../data/images";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  section: {
    marginTop: "-20px",
    backgroundColor: "#ffffff",
    paddingBottom: "50px",
    // backgroundColor: "yellow",
    // height: "100vh",
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
  label: {
    color: "#B3B3B3",
    fontSize: "20px",
    top: "-20px",
  },
  offer: {
    color: "#E0E0E0",
    fontSize: "4vw",
    top: "-20px",
  },
  semiTitle: {
    color: "#A59D7D",
    // paddingTop: theme.spacing(5),
  },
  large: {
    width: "100%",
    maxWidth: "5vw",
    height: "auto",
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container>
        <Typography
          className={classes.semiTitle}
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          variant="h4"
          noWrap
        >
          {"/ TECH STACK"}{" "}
        </Typography>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          className="flex-container"
        >
          {images.map((image) => (
            <div className="flex-item" key={image._id}>
              <Avatar
                variant="rounded"
                className={classes.large}
                alt={image.name}
                src={image.image}
              />
            </div>
          ))}
        </div>

        <div className={classes.root}>
          <span className={classes.titleOpening}>{" < "}</span>
          <span className={classes.titleMid}>{" SERVICES "}</span>
          <span className={classes.titleClosing}>{" /> "}</span>
          <span className={classes.offer}>{"  that I offer "}</span>
        </div>
        <div
          className="flex-container-services "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
        >
          <div>
            <img
              width="180"
              height="180"
              className="flex-item-offer"
              alt="web"
              src="/images/webdev.svg"
            ></img>
            <p className={classes.label}>Web Development</p>
          </div>
          <div>
            <img
              width="180"
              height="180"
              className="flex-item-offer"
              alt="mobile"
              src="/images/mobiledev.svg"
            ></img>
            <p className={classes.label}>Mobile Development</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
