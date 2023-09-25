import React, { useState, useEffect, useRef, use } from 'react';
import maps from '../data/maps.json';
import styles from './Map.module.css';

const Map = ({ name }) => {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [boundaries, setBoundaries] = useState({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const mapData = maps.find((map) => map.name === name);
  const viewportRef = useRef(null);

  function consolLog() {
    console.log(Object.values(viewportSize));
    console.log(zoom);
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 1, 10));
    console.log('zoom in');
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 1));
    console.log('zoom out');
  };
  const handleMouseDown = () =>  {setIsDragging(true)};
  const handleMouseUp = () => {setIsDragging(false)};
  const handleMouseMove = (event) => {};
  const handleMouseLeave = () => {setIsDragging(false)};

  useEffect(() => {
    const mapViewport = document.getElementById('viewport');
    mapViewport.addEventListener('mousedown', handleMouseDown);
    mapViewport.addEventListener('mousemove', handleMouseMove);
    mapViewport.addEventListener('mouseup', handleMouseUp);
    mapViewport.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mapViewport.removeEventListener('mousedown', handleMouseDown);
      mapViewport.removeEventListener('mousemove', handleMouseMove);
      mapViewport.removeEventListener('mouseup', handleMouseUp);
      mapViewport.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging]);

  useEffect(() => {
    const mapA = document.getElementById('mapArea');
    mapA.style.transform = `scale(${zoom})`;
    mapA.style.transition = 'transform 100ms ease';
  }, [zoom]);

  useEffect(() => {
    
    if(!viewportRef.current) return;

    const viewportObserver = new ResizeObserver(() => { 
      if(viewportRef.current.offsetWidth !== viewportSize.width) {
        setViewportSize({
          width: viewportRef.current.offsetWidth,
          height: viewportRef.current.offsetHeight
        });
      };
    });

    viewportObserver.observe(viewportRef.current);

    return () => viewportObserver.disconnect();
    
  }, [viewportRef.current]);

  console.log(Object.values(viewportSize));
  console.log(zoom);

  return (
    <div className={styles.container}>
      <div>{viewportSize.width}</div>
      <div className={styles.buttons}>
        <button className={styles.zoomButton} onClick={handleZoomIn}>+</button>
        <button className={styles.zoomButton} onClick={handleZoomOut}>-</button>
      </div>
      <div id="viewport" className={styles.viewport} ref={viewportRef}>
        <div id="mapArea" className={styles.contents}>
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
