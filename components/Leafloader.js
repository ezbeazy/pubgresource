import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LeafLoader = ({ mapName, markers = [], polylines = [] }) => {

  const bounds = [[0, 0], [-256, 256]];

  const iconLocation = new L.Icon({
    iconUrl: '/img/markers/location-yellow.svg',
    iconRetinaUrl: '/img/markers/location-yellow.svg',
    iconSize: new L.Point(30, 30),
    iconAnchor: new L.Point(15, 30),
});

  return(
    <MapContainer crs={L.CRS.Simple} maxBounds={bounds} maxBoundsViscosity={1} center={[-128, 128]} zoom={1} maxZoom={5} minZoom={.5} scrollWheelZoom={true} style={{ width: "100%", paddingBottom: "100%"}}>
      <TileLayer
        tileSize={256}
        attribution='&copy; <a href="https://pubgresource.com">PubgResource</a> contributors'
        url={`/img/maps/leaflet/${mapName}/{z}_{x}_{y}.webp`}
      />
      {polylines.map((polyline, index) => (
        <Polyline key={index} positions={polyline.positions} color={polyline.color} weight={polyline.weight} opacity={polyline.opacity}/>
      ))}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={iconLocation}>
          <Popup>
            {marker.popupContent}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafLoader;
