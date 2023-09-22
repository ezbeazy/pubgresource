import React, { useState, useEffect } from 'react';
import maps from '../data/maps.json';
import styles from './Map.module.css';

const Map = ({ name }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const mapData = maps.find((map) => map.name === name);

  const handleZoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 1, 10));
  const handleZoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 1, 1));

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const adjustBoundaries = (newX, newY) => {
    const viewportBox = document.getElementById('mapViewport').getBoundingClientRect();
    const viewportWidth = viewportBox.width;
    const viewportHeight = viewportBox.height;
  
    const contentBox = document.getElementById('mapContent').getBoundingClientRect();
    const contentWidth = contentBox.width;
    const contentHeight = contentBox.height;
  
    const minX = (viewportWidth - contentWidth) / 2;
    const maxX = (contentWidth - viewportWidth) / 2;
  
    const minY = (viewportHeight - contentHeight) / 2;
    const maxY = (contentHeight - viewportHeight) / 2;
  
    // Keep within boundaries
    newX = Math.max(minX, Math.min(maxX, newX));
    newY = Math.max(minY, Math.min(maxY, newY));
  
    return { x: newX, y: newY };
  };
  

  const handleMouseMove = (e) => {

    if (isDragging) {
      setPosition((prev) => {
        let newX = prev.x + e.movementX;
        let newY = prev.y + e.movementY;
  
        const adjusted = adjustBoundaries(newX, newY);
        return adjusted;
      });
    }
  };
  
  useEffect(() => {
    const mapViewport = document.getElementById('mapViewport');
    mapViewport.addEventListener('mousemove', handleMouseMove);
    mapViewport.addEventListener('mouseup', handleMouseUp);
    mapViewport.addEventListener('mousedown', handleMouseDown);
    mapViewport.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mapViewport.removeEventListener('mousemove', handleMouseMove);
      mapViewport.removeEventListener('mouseup', handleMouseUp);
      mapViewport.removeEventListener('mousedown', handleMouseDown);
      mapViewport.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging]);

  //translate map position
  useEffect(() => {
    const mapContent = document.getElementById('mapContent');
    mapContent.style.transform = `translate(${position.x}px, ${position.y}px) scale(${zoom})`;
    mapContent.style.transition = 'transform 100ms ease';
  }, [position.x, position.y]);

  //translate map scale
  useEffect(() => {
    const mapContent = document.getElementById('mapContent');
    mapContent.style.transform = `scale(${zoom})`;
    mapContent.style.transition = 'transform 1s ease';

    if (zoom <= 1) {
      setPosition({ x: 0, y: 0 }); // Reset position
    }

    const adjusted = adjustBoundaries(position.x, position.y);
    setPosition(adjusted);
  }, [zoom]);

  useEffect(() => {
    setPosition((prev) => {
      const viewportBox = document.getElementById('mapViewport').getBoundingClientRect();
      const viewportWidth = viewportBox.width;
      const viewportHeight = viewportBox.height;
  
      const contentBox = document.getElementById('mapContent').getBoundingClientRect();
      const contentWidth = contentBox.width * zoom;  // taking zoom into consideration
      const contentHeight = contentBox.height * zoom;  // taking zoom into consideration
  
      const minX = (viewportWidth - contentWidth) / 2;
      const maxX = (contentWidth - viewportWidth) / 2;
  
      const minY = (viewportHeight - contentHeight) / 2;
      const maxY = (contentHeight - viewportHeight) / 2;
  
      let newX = Math.max(minX, Math.min(maxX, prev.x));
      let newY = Math.max(minY, Math.min(maxY, prev.y));
  
      return { x: newX, y: newY };
    });
  }, [zoom]);
  

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.zoomButton} onClick={handleZoomIn}>+</button>
        <button className={styles.zoomButton} onClick={handleZoomOut}>-</button>
      </div>
      <div id="mapViewport" className={styles.viewport}>
        <div id="mapContent" className={styles.contents}>
          <img 
            src={mapData.image} 
            alt={`${name} Map`} 
            className={styles.mapImage} 
            draggable="false" 
          />
          {mapData.secretRooms && mapData.secretRooms.map((room, index) => (
          <img
            key={index}
            src="/img/map-elements/pubg-secret-key-yellow.webp"
            alt="Secret Room"
            style={{ left: room.x, top: room.y }}
            className={styles.roomIcon}
            draggable="false"
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
