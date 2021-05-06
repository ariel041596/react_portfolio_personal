import React, { useEffect, useState } from "react";

import Meta from "../components/Meta";

import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "nuka-carousel";

import projects from "../data/projects";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
}));
const ProjectScreen = ({ match, history }) => {
  const classes = useStyles();
  const projectID = match.params.id;
  const [data, setData] = useState("");
  useEffect(() => {
    const projectData = projects.find((proj) => proj._id === Number(projectID));
    setData(projectData);
  }, [projectID]);

  return (
    <>
      <Container>
        <Meta title={data.title}></Meta>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button className={classes.root} variant="outlined">
            Go Back
          </Button>
        </Link>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Carousel>
              <img src={data.image} alt={data.name} />
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectScreen;
