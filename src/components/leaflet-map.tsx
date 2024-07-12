// src/components/Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import property from '../../alaeddins-coast-website/schemaTypes/property';

// Fix Leaflet's default icon issue in React
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});// Define the props type
interface MapProps {
    lat: number;
    lng: number;
    adress: string;
}



const Map: React.FC<MapProps> = ({ lat, lng, adress }) => {
    return (
        <MapContainer
            dragging={true}
            scrollWheelZoom={false}
            attributionControl={false}
            center={[lat, lng]} zoom={15} style={{ height: '75vh', width: '100%', zIndex: 0 }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[lat, lng]}>
                <Popup>
                    {adress}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;