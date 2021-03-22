import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { AppBar, Toolbar} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "4.5rem",
    [theme.breakpoints.up("xs")]: {
      marginTop: "3.5rem",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  Breadcrumbs: {
    paddingLeft: "4rem",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  }
}));
export default function SimpleBreadcrumbs(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb" className={classes.Breadcrumbs}>
          <Link
            color="textSecondary"
            href="/"
            onClick={handleClick}
            style={{ fontSize: "1.25rem", fontWeight: "bolder", textDecoration: 'none', color: 'darkGray' }}
          >
            Home
          </Link>
        </Breadcrumbs>
      </Toolbar>
      
    </AppBar>
  );
}
