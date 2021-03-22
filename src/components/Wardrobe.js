import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import rightArrow from "../images/right_arrow2.png";

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
    backgroundColor: "#ffb400",
    color: "white",
    left: "57.5%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "left",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      left: '57%',
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      top: '80%'
    },
    [theme.breakpoints.down("md")]: {
      top: '65%',
      left:'60%',
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
    textAlign: "left",
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box>
        <MuiThemeProvider theme={theme}>
          <Box className={classes.boxLength}>
            <Typography
              variant="h5"
              className={classes.FloatL}
              style={{ marginRight: "2.5rem" }}
            >
              Explore
            </Typography>
            <img src={rightArrow} className={classes.FloatL} />
          </Box>
          <Typography variant="h5" style={{ clear: "both", marginTop: '2rem' }}>
            RETAILER
          </Typography>
        </MuiThemeProvider>
      </Box>
    </Paper>
  );
}
