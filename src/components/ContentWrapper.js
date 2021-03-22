import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    minWidth: 150,
    maxHeight: 130,
    left: "50%",
    top: "20%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      width: "65%",
      left: '56%',
    },
    [theme.breakpoints.down("md")]: {
      top: '37%',
    },
    border: '1px solid black',
    paddingLeft: '0.25rem',
    paddingRight: '0.25rem',
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
          <Typography variant="h3" gutterBottom style={{color: '#66180d'}}>
            {heading}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {text}
          </Typography>
        </MuiThemeProvider>
      </Box>
    </Paper>
  );
}
