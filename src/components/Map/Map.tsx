"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { storyData } from "@/data/storyData";

// Fix for default marker icons in Leaflet with Next.js
const hackerIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#c5a059; width:14px; height:14px; border-radius:50%; border: 2px solid #fdf5e6; box-shadow: 0 0 5px rgba(62, 39, 35, 0.8);'></div>",
  iconSize: [14, 14],
  iconAnchor: [7, 7]
});

interface MapControllerProps {
  activeLogId: string | null;
}

function MapController({ activeLogId }: MapControllerProps) {
  const map = useMap();
  
  useEffect(() => {
    if (activeLogId === 'global-view') {
      map.flyTo([38.0, 15.0], 5, {
        duration: 2,
        easeLinearity: 0.25
      });
    } else if (activeLogId) {
      const logData = storyData.find(d => d.id === activeLogId);
      if (logData) {
        map.flyTo([logData.lat, logData.lng], logData.zoom, {
          duration: 1.5,
          easeLinearity: 0.25
        });
      }
    }
  }, [activeLogId, map]);

  return null;
}

export default function Map({ activeLogId }: { activeLogId: string | null }) {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <MapContainer
        center={[39.0, 18.0]}
        zoom={5}
        zoomControl={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          className="vintage-map-layer"
        />
        
        {storyData.map((log) => (
          <Marker 
            key={log.id} 
            position={[log.lat, log.lng]} 
            icon={hackerIcon}
          >
            <Popup>
              <div className="font-title text-lg text-center">
                {log.title}
                <i className="block font-mono-custom text-xs text-[#8c7355] mt-1">Status: Logged</i>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <MapController activeLogId={activeLogId} />
      </MapContainer>
      
      {/* Decorative overlay for vintage feel */}
      <div className="map-overlay" />
    </div>
  );
}
