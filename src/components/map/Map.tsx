import React from "react";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";
const Map = ({ items }) => {
  return (
    <MapContainer
      center={[42.6977, 23.3219]}
      zoom={12}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item: any) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
