import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ChatIcon from "@material-ui/icons/Chat";
import Satellite from "@material-ui/icons/Satellite";
import DescriptionIcon from "@material-ui/icons/Description";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RedeemIcon from "@material-ui/icons/Redeem";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles, useTheme } from "@material-ui/core/styles";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    listitem : {
      "&:hover": {
        backgroundColor: "#66180d !important",
        color: 'white',
      }
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    
    },
    
  }));


const SideList = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [ hover, setHover] = useState();
  return (
    <List>
      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <HomeOutlinedIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <SendIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="My Wardrobe" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <DescriptionIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <GroupAddIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="My Friend" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <Satellite style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="My Background" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <ChatIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="Chats" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <RedeemIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="Gifts" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <DateRangeIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="My Calendar" />
      </ListItem>

      <ListItem
        button
        hover
        className={classes.listitem}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ListItemIcon>
          <SettingsIcon style={{ color: hover ? "white" : "#4a4a4a" }} />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );
};

export default SideList;
