import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";

import ContentWrapper from "./ContentWrapper";
import Fashion from "./Fashion";
import Wardrobe from "./Wardrobe";
import fashion from "../images/fashionisnta_img.png";
import wardrobe from "../images/retailer_img.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",

    zIndex: "1",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  fashion: {
    backgroundColor: "white",
    paddingTop: "5rem",
    marginBottom: "5rem",
    paddingLeft: "5rem",
    height: "100%",
  },
  media: {
    height: "100vh",
    width: "100%",
  },
  wardrobe: {
    backgroundColor: "maroon",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    height: "100%",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          container
          spacing={0}
          className={classes.fashion}
        >
          <ContentWrapper />
          <Fashion />
          <Hidden only={[ 'lg', 'md', 'xl']}>
            <Wardrobe />
          </Hidden>
          <CardMedia className={classes.media} image={fashion} />
        </Grid>
        <Hidden only={["xs", 'sm']}>
          <Grid
            item
            xs={0}
            sm={12}
            md={6}
            container
            spacing={0}
            className={classes.wardrobe}
            style={{ paddingRight: "5rem" }}
          >
            <Wardrobe />

            <CardMedia className={classes.media} image={wardrobe} />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
