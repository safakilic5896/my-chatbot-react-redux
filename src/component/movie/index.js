import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export class Movie extends Component {
  constructor() {
    super();
  }
  render() {
    const movie = this.props.data;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={movie.ulrImage}
            title={movie.ulrImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="h2">
              {movie.title} &emsp;{movie.vote}⭐
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              {movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
