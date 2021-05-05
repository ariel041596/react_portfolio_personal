import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

import projects from "../data/projects";

import Tilt from "./Tilt";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  card: {
    maxWidth: 345,
    margin: 10,
    // backgroundColor: "#C1C1C1",
  },
  media: {
    height: 150,
  },
  section: {
    // backgroundColor: "#ffffff",
    backgroundColor: "#1D1D1D",
    // backgroundColor: "#343A40",
    // height: "100vh",
  },
  title: {
    color: "#E0E0E0",
    paddingTop: theme.spacing(4),
  },

  titleOpening: {
    color: "#E0E0E0",
    fontSize: "30px",
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
    top: "-20px",
  },
  label: {
    color: "#B3B3B3",
    fontSize: "20px",
    top: "-20px",
  },
  offer: {
    color: "#E0E0E0",
    fontSize: "30px",
    top: "-20px",
  },
  semiTitle: {
    color: "#A59D7D",
    // paddingTop: theme.spacing(5),
  },
}));

const Projects = () => {
  const classes = useStyles();
  const options = {
    scale: 1,
    speed: 1000,
    max: 30,
  };

  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.root}>
          <span className={classes.titleOpening}>{" < "}</span>
          <span className={classes.titleMid}>{" PROJECTS "}</span>
          <span className={classes.titleClosing}>{" /> "}</span>
        </div>
        <div
          className="flex-container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
        >
          {projects.map((project) => (
            <Tilt
              options={options}
              className="tooltip"
              data-tooltip="Click for details"
            >
              <Card key={project._id} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    title={project.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {project.title}
                    </Typography>
                  </CardContent>{" "}
                  <div className="flex-container">
                    {project.stacks.map((stack) => (
                      <div key={classes._id}>
                        <Avatar
                          className="flex-item"
                          variant="square"
                          alt={stack.name}
                          src={stack.image}
                        />
                      </div>
                    ))}
                  </div>
                </CardActionArea>
                {/* <CardActions>
                <Button size="small" color="primary">
                  See Details
                </Button>
              </CardActions> */}
              </Card>
            </Tilt>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
