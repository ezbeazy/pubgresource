import { MapContainer, TileLayer, ZoomControl, LayersControl, LayerGroup, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import maps from '../data/maps.json';

const LeafLoader = ({ mapName, markers = [], polylines = [] }) => {

  const bounds = [[0, 0], [-256, 256]];
  const mapScale = 256 / 100;
  const mapData = maps.find((map) => map.name === mapName);

  const iconLocation = new L.Icon({
    iconUrl: '/img/markers/location-yellow.svg',
    iconRetinaUrl: '/img/markers/location-yellow.svg',
    iconSize: new L.Point(30, 30),
    iconAnchor: new L.Point(15, 30),
  });

  

  return(
    <MapContainer crs={L.CRS.Simple} maxBounds={bounds} maxBoundsViscosity={1} center={[-128, 128]} zoom={2} maxZoom={5} minZoom={0} scrollWheelZoom={true} attributionControl={false} zoomControl={false} style={{ width: "100%", paddingBottom: "100%"}}>
      <TileLayer
        tileSize={256}
        attribution='&copy; <a href="https://pubgresource.com">PubgResource</a> contributors'
        url={`/img/maps/${mapName}/leaflet/{z}_{x}_{y}.webp`}
      />
      <ZoomControl position={'topright'} />
      <LayersControl position={'topright'}>
        <LayersControl.Overlay name="Tunnels" checked>
        {polylines.map((polyline, index) => {
            // Scale the positions by multiplying each coordinate by mapScale
            const scaledPositions = polyline.positions.map(coord => [
              coord[0] * mapScale,
              coord[1] * mapScale,
            ]);

            return (
              <Polyline
                key={index}
                positions={scaledPositions}
                color={polyline.color}
                weight={polyline.weight}
                opacity={polyline.opacity}
                stroke={polyline.stroke}
                fill={polyline.fill}
                fillOpacity={polyline.fillOpacity}
              />
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Secret Rooms" checked>
        <LayerGroup>
          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.position[0] * mapScale, marker.position[1] * mapScale]}  icon={iconLocation}>
              <Popup>
                {marker.popupContent}
              </Popup>
            </Marker>
          ))}
        </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default LeafLoader;
