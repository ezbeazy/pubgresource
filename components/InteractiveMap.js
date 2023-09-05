import mapData from '../data/secret-keys.json';
import styles from './InteractiveMap.module.css';

const InteractiveMap = ({ mapName, mapImg, keyImg }) => {
    // Find the correct map data based on the provided mapName
    const currentMap = mapData.find(map => map.mapName === mapName);
  
    if (!currentMap) {
      return <p>Map not found.</p>;
    }
  
    return (
      <div className={styles.mapContainer}>
        <img src={mapImg} alt={mapName} className={styles.mapImg} />
        <div className={styles.overlay}>
          {currentMap.secretRooms.map(room => (
            <img 
              key={room.id} 
              src={keyImg} 
              alt={room.name}
              className={styles.keyImg}
              style={{
                left: `${room.coordinates.x}px`,
                top: `${room.coordinates.y}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default InteractiveMap;
