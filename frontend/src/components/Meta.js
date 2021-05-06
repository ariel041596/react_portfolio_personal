import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Ariel's Portfolio",
  description: "My portfolio that I made in REACT",
  keywords: "react, mongodb, node, express",
};

export default Meta;
