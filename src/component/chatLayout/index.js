import React, { Component } from "react";
import socket from "../../socketConfig";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import {
  multipleMessageReceived,
  allMessageReceived,
  simpleMessageReceived,
} from "../bot/actions";
import { getAllMessage } from "../http/message";
import store from "../../store";
import { connect } from "react-redux";
import { Youtube } from "../youtube";
import { Weather } from "../weather";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import { Maps } from "../map";
import { Movie } from "../movie";
import { News } from "../news";
import { BotList } from "../botList";

class Chat extends Component {
  constructor() {
    super();
    this.state = { message: "" };
    this.dispatch = store.dispatch;
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    window.onbeforeunload = () => {
      localStorage.removeItem("user");
      socket.disconnect();
    };
    getAllMessage().then((response) =>
      this.dispatch(allMessageReceived(response))
    );
    socket.on("message-received", (message) => {
      console.log(message);
      if (
        message.type === "MESSAGE" ||
        message.type === "METEO" ||
        message.type === "MAP"
      ) {
        this.dispatch(simpleMessageReceived(message));
      } else if (
        Array.isArray(message) &&
        (message[0].type === "YOUTUBE" ||
          message[0].type === "MOVIE" ||
          message[0].type === "NEWS" ||
          message[0].type === "PAS_DE_DONNEE")
      ) {
        this.dispatch(multipleMessageReceived(message));
      }
    });
  }
  onHandleClick() {
    if (this.state.message !== "") {
      socket.emit("message-send", {
        message: this.state.message,
        user: localStorage.getItem("user"),
      });
      this.setState({ message: "" });
    }
  }

  render() {
    return (
      <div>
        <Grid container component={Paper} width="100%" height="80vh">
          <Grid item xs={3} borderRight="1px solid #e0e0e0">
            <BotList />
          </Grid>
          <Grid item xs={9}>
            <Paper
              style={{ maxHeight: "80vh", overflow: "auto", minHeight: "80vh" }}
            >
              <List height="70vh" overflowY="auto">
                {this.props.message.map(
                  (message) =>
                    (message.type === "MESSAGE" && (
                      <ListItem key={message.id}>
                        <Grid container>
                          <Grid item xs={12}>
                            <ListItemText
                              align={
                                message.user === localStorage.getItem("user")
                                  ? "right"
                                  : "left"
                              }
                            >
                              <Chip
                                color={
                                  message.user === localStorage.getItem("user")
                                    ? "primary"
                                    : "secondary"
                                }
                                avatar={
                                  <Tooltip
                                    title={message.user}
                                    placement="left"
                                  >
                                    <Avatar alt={message.user}>
                                      {message.user.substring(0, 2)}
                                    </Avatar>
                                  </Tooltip>
                                }
                                label={message.message}
                                style={{ fontSize: "18px" }}
                                variant="outlined"
                              />
                            </ListItemText>
                          </Grid>
                        </Grid>
                      </ListItem>
                    )) ||
                    (message.type === "YOUTUBE" && (
                      <ListItem key={message.id}>
                        <Grid container>
                          <ListItem key={message.title}>
                            <Grid item xs={12}>
                              <ListItemText
                                align="left"
                                primary={message.title}
                              ></ListItemText>
                              <Youtube youtubeVideo={message} />
                            </Grid>
                          </ListItem>
                        </Grid>
                      </ListItem>
                    )) ||
                    (message.type === "METEO" && (
                      <ListItem key={message.id}>
                        <Grid container>
                          <Grid item xs={2}>
                            <ListItemText align="left"></ListItemText>
                            <Weather data={message} />
                          </Grid>
                        </Grid>
                      </ListItem>
                    )) ||
                    (message.type === "MAP" && (
                      <ListItem key={message.id}>
                        <Grid container>
                          <Grid item xs={12}>
                            <ListItemText align="left"></ListItemText>
                            <Maps data={message} />
                          </Grid>
                        </Grid>
                      </ListItem>
                    )) ||
                    (message.type === "MOVIE" && (
                      <ListItem key={message.id}>
                        <Grid container>
                          <Grid item xs={3}>
                            <ListItemText align="left"></ListItemText>
                            <Movie data={message} />
                          </Grid>
                        </Grid>
                      </ListItem>
                    )) ||
                    (message.type === "NEWS" && (
                      <ListItem key={message.id}>
                        <Grid container>
                          <Grid item xs={3}>
                            <ListItemText align="left"></ListItemText>
                            <News data={message} />
                          </Grid>
                        </Grid>
                      </ListItem>
                    )) ||
                    (message.type === "PAS_DE_DONNEE" && (
                      <ListItem key={message.id}>
                        <Grid container>
                          <ListItem key={message.message}>
                            <Grid item xs={12}>
                              <ListItemText align="left"></ListItemText>
                              <Chip
                                label={message.message}
                                style={{ fontSize: "18px" }}
                                variant="outlined"
                              />
                            </Grid>
                          </ListItem>
                        </Grid>
                      </ListItem>
                    ))
                )}
              </List>
            </Paper>
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  label="Taper message"
                  fullWidth
                  value={this.state.message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                />
              </Grid>
              <Grid xs={1} align="right" onClick={() => this.onHandleClick()}>
                <Fab color="primary" aria-label="add">
                  <SendIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(Chat);
