import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export class News extends Component {
  constructor() {
    super();
  }
  render() {
    const news = this.props.data;
    return (
      <Link  href={news.url} rel="noopener" target="_blank">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={news.ulrImage}
              title={news.ulrImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="h2">
                {news.title}
              </Typography>
              <Typography variant="body3" color="textSecondary" component="p">
                {news.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
}
