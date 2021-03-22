import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  Badge,
  Grid,
  Paper,
} from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";

import { red } from "@material-ui/core/colors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  root: {
    maxWidth: 345,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  Avatar: {
    display: "flex",
    float: "left",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  FollowButton: {
    backgroundColor: "maroon",
    color: "white",
    float: "right",
    marginTop: "0.75rem",
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const robots = [
  {
    id: 1,
    name: "Ketty Martin",
    image:
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 2,
    name: "Leanne Graham",
    image:
      "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    id: 3,
    name: "Zeny Rosalina",
    image:
      "https://images.unsplash.com/photo-1486308510493-aa64833637bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
];
export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} xs={12}>
      {robots.map((item) => (
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={item.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <div className={classes.Avatar}>
                    <Badge>
                      <Avatar alt="Remy Sharp" src={item.avatar} />
                    </Badge>
                    <Badge>
                      <Typography variant="body2" display="block" gutterBottom>
                        {item.name}
                        <Typography
                          variant="caption"
                          display="block"
                          color="textSecondary"
                          gutterBottom
                        >
                          01 Sep 2020
                        </Typography>
                      </Typography>
                    </Badge>
                  </div>

                  <Button size="small" className={classes.FollowButton}>
                    Follow
                  </Button>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div>
                  <Button size="small" color="textSecondary">
                    <ThumbUpOutlinedIcon />
                    <Typography
                      variant="caption"
                      display="block"
                      color="textSecondary"
                      style={{ marginLeft: "0.50rem" }}
                    >
                      25 likes
                    </Typography>
                  </Button>
                </div>
                <div>
                  <Button size="small" color="textSecondary">
                    <ChatIcon />
                    <Typography
                      variant="caption"
                      display="block"
                      color="textSecondary"
                      style={{ marginLeft: "0.50rem" }}
                    >
                      15 Comments
                    </Typography>
                  </Button>
                </div>
                <div>
                  <Button size="small" color="textSecondary">
                    <ShareIcon />
                    <Typography
                      variant="caption"
                      display="block"
                      color="textSecondary"
                      style={{ marginLeft: "0.50rem" }}
                    >
                      6 Shares
                    </Typography>
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
