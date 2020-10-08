import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./Footer.css";

const Footer = () => {
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className="footer-container"
    >
      <Typography variant="h6">{`${new Date().getFullYear()} - Proyecto de Tesis`}</Typography>
    </Grid>
  );
};

export default Footer;
