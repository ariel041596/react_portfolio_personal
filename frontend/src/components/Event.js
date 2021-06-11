import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

import events from "../data/events";

import Tilt from "../components/Tilt";

import Carousel from "nuka-carousel";

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
  },

  media: {
    height: 180,
  },
  section: {
    // backgroundColor: "#ffffff",
    backgroundColor: "#1D1D1D",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    minHeight: "100vh",
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
}));

const Events = () => {
  const classes = useStyles();
  const options = {
    scale: 1,
    speed: 1000,
    max: 30,
  };

  return (
    <section className={classes.section} id="events">
      <Container>
        <div className={classes.root}>
          <span className={classes.titleOpening}>{" < "}</span>
          <span className={classes.titleMid}>{" EVENTS "}</span>
          <span className={classes.titleClosing}>{" /> "}</span>
        </div>
        <div
          className="flex-container "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
        >
          {events.map((event) => (
            <Tilt options={options}>
              <Card className={classes.card} key={event._id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={event.image}
                    title={event.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {event.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {event.description}
                    </Typography>
                  </CardContent>{" "}
                  <div className="flex-container">
                    {event.logo && (
                      <Avatar
                        className="flex-item"
                        variant="square"
                        alt={event.name}
                        src={event.logo}
                      />
                    )}
                  </div>
                </CardActionArea>
              </Card>
            </Tilt>
          ))}
        </div>
        <div>
          <p></p>
        </div>
      </Container>
    </section>
  );
};

export default Events;
