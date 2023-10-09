import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LeafLoader = ({ name }) => {

  const bounds = [[0, 0], [-256, 256]];

  return(
    <MapContainer crs={L.CRS.Simple} maxBounds={bounds} maxBoundsViscosity={0} center={[256, 256]} zoom={1} maxZoom={5} minZoom={1} scrollWheelZoom={true} style={{ width: "100%", paddingBottom: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://localhost:3000/img/maps/leaflet/taego/{z}_{x}_{y}.jpg"
      />
      <Marker position={[-20, 20]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafLoader;
