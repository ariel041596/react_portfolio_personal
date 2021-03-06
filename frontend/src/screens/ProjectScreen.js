import React, { useEffect, useState } from "react";

import Meta from "../components/Meta";

import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

import Carousel from "nuka-carousel";

// import ReactPlayer from "react-player";

import projects from "../data/projects";

import YoutubeEmbed from "../components/YoutubeEmbed";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  large: {
    width: "100%",
    maxWidth: "5vw",
    height: "auto",
  },
}));
const ProjectScreen = ({ match, history }) => {
  const classes = useStyles();
  const projectID = match.params.id;
  const [data, setData] = useState("");
  const [stacks, setStacks] = useState([]);
  const viewGithub = () => {
    window.open(data.githubURL, "_blank").focus();
  };
  useEffect(() => {
    const projectData = projects.find((proj) => proj._id === Number(projectID));
    setData(projectData);
    setStacks(projectData.stacks);
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
              {data.youtubeURL && (
                // <ReactPlayer
                //   width="100%"
                //   height="300px"
                //   url={data.youtubeURL}
                // />
                <YoutubeEmbed embedId={data.youtubeID}></YoutubeEmbed>
              )}
              <img src={data.image} alt={data.name} />
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              {data.name}
            </Typography>
            <Divider />
            <Typography className={classes.root} variant="h6">
              {data.title}
            </Typography>
            <Divider className={classes.root} />
            <div className="flex-container">
              {stacks.map((stack) => (
                <div className="flex-item" key={stack._id}>
                  <Avatar
                    variant="rounded"
                    className={classes.large}
                    alt={stack.name}
                    src={stack.image}
                  />
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style={{
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              {data.githubURL && (
                <Button
                  onClick={viewGithub}
                  variant="outlined"
                  color="primary"
                  startIcon={<GitHubIcon />}
                >
                  View source code
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectScreen;
