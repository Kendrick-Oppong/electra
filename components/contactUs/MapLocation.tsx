"use client"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customMarker = L.icon({
  iconUrl: "/location.svg",
  iconSize: [40, 40],
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
});

 const MapLocation = () => {
  return (
    <MapContainer
      style={{ height: "400px" }}
      center={[5.5728, -0.1801]}
      zoom={16}
      maxZoom={18}
      zoomSnap={0.5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[5.5728, -0.1801]} icon={customMarker}>
        <Popup className="text-sm">
          Bostro 22 <br /> Labone Crescent, Accra, Ghana
        </Popup>
      </Marker>
    </MapContainer>
  );
};


export default MapLocation