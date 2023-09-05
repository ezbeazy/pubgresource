import React, { useState } from 'react';
import mapData from '../data/maps.json';
import styles from './Map.module.css';

const Map = ({ mapName }) => {
  const [showSecretRoom, setShowSecretRoom] = useState(true);
  const currentMap = mapData.find(map => map.mapName === mapName);

  if (!currentMap) return <p>Map not found.</p>;

  const toggleSecretRoom = () => {
    setShowSecretRoom(!showSecretRoom);
  };

  return (
    <div className={styles.mapContainer}>
      <img src={currentMap.mapImg} alt={mapName} className={styles.mapImg} />
      {currentMap.secretRoomImg && (
        <button onClick={toggleSecretRoom} className={`${styles['toggleButton']} ${showSecretRoom ? styles['active'] : ''}`}>
        <img src="/img/map-elements/pubg-secret-key-tilted.webp" alt="icon" />
        <span className={styles.buttonText}>Secret Rooms</span>
        </button>
      )}
      {showSecretRoom && currentMap.secretRoomImg && (
        <img
          src={currentMap.secretRoomImg}
          alt={`${mapName} Secret Room`}
          className={styles.secretRoomImg}
        />
      )}
    </div>
  );
};

export default Map;
