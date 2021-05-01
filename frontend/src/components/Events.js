import React from "react";
import Container from "@material-ui/core/Container";

const Events = () => {
  return (
    <section
      style={{
        marginTop: "-20px",
        backgroundColor: "yellow",
        height: "100vh",
      }}
    >
      <Container>
        <h1
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
        >
          Events
        </h1>
      </Container>
    </section>
  );
};

export default Events;
