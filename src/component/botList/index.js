import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import youtube from './img/youtube.png';
import map from './img/map.png';
import news from './img/news.png';
import weather from './img/weather.png';
import movie from './img/movie.png';

export class BotList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <List>
          <ListItem key="Name">
            <ListItemIcon>
              <Avatar alt="Name" />
            </ListItemIcon>
            <ListItemText primary={localStorage.getItem("user")}></ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="Youtube">
            <ListItemIcon>
              <Avatar alt="Youtube" src={youtube} />
            </ListItemIcon>
            <ListItemText primary="Youtube">Youtube</ListItemText>
            <ListItemText align="right"></ListItemText>
          </ListItem>
          <ListItem key="Météo">
            <ListItemIcon>
              <Avatar alt="Météo" src={weather} />
            </ListItemIcon>
            <ListItemText primary="Météo">Météo</ListItemText>
          </ListItem>
          <ListItem key="Map">
            <ListItemIcon>
              <Avatar alt="Map" src={map} />
            </ListItemIcon>
            <ListItemText primary="Map">Map</ListItemText>
          </ListItem>
          <ListItem key="Movie">
            <ListItemIcon>
              <Avatar alt="Movie" src={movie} />
            </ListItemIcon>
            <ListItemText primary="Movie">Movie</ListItemText>
          </ListItem>
          <ListItem key="News">
            <ListItemIcon>
              <Avatar alt="News" src={news} />
            </ListItemIcon>
            <ListItemText primary="News">News</ListItemText>
          </ListItem>
        </List>
      </>
    );
  }
}
