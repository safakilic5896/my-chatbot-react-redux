import React, { Component } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Typography from "@material-ui/core/Typography";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export class Maps extends Component {
  render() {
    const position = [this.props.data.x, this.props.data.y];
    const city = this.props.data.city;
    return (
      <>
        <Typography gutterBottom variant="h5" component="h2">
          {city}
        </Typography>
        <MapContainer
          center={position}
          zoom={14}
          style={{ height: "400px", width: "400px" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{this.props.data.city}</Popup>
          </Marker>
        </MapContainer>
      </>
    );
  }
}
