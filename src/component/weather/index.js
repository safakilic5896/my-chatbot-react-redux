import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export class Weather extends Component {
  constructor() {
    super();
  }
  render() {
    const weather = this.props.data;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={weather.icon}
            title={weather.city}
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="h2">
              {weather.city}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              {weather.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
