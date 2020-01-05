import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class MapDataVisualization extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return (
      <div style={{ height: "400px", width: "98.5%", padding: "10px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA6HAtAwt_1VNXnUyUiGkfZStnN0QBZ4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}
