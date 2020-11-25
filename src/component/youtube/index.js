import React, { Component } from "react";

export class Youtube extends Component {
  constructor() {
    super();
  }
  render() {
    const youtube = this.props.youtubeVideo;
    console.log(youtube);
    if (youtube.url !== undefined) {
      return <iframe width="420" height="345" src={youtube.url}></iframe>;
    } else {
      return <></>;
    }
  }
}
