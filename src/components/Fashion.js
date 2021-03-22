import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import leftArrow from "../images/left_arrow.png";

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
  Box,
  Paper,
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    maxHeight: 300,
    backgroundColor: "#fd1053",
    color: "white",
    left: "42.5%",
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "right",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      width: "45%",
      left:'57%'
    },
    [theme.breakpoints.down("sm")]: {
      bottom: '20%'
    },
    [theme.breakpoints.down("md")]: {
      bottom: '10%',
    
    },
    padding: "0.50rem",
  },
  FloatL: {
    float: "left",
  },
  FloatR: {
    float: "right",
  },
  boxLength: {
    textAlign: "right",
  },
}));

const heading = "VIRDROBE";
const text = "Your Personal Fashion Solution";

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box>
        <MuiThemeProvider theme={theme}>
          <Box className={classes.boxLength}>
            <Typography variant="h5" className={classes.FloatR}>
              Explore
            </Typography>
            <img
              src={leftArrow}
              className={classes.FloatR}
              style={{ marginRight: "2.5rem" }}
            />
          </Box>
          <Typography variant="h5" style={{ clear: "both" }}>
            FASHIONINSTA
          </Typography>
        </MuiThemeProvider>
      </Box>
    </Paper>
  );
}
