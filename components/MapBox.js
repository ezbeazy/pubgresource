import React, { useState, useEffect, useRef, use } from 'react';
import maps from '../data/maps.json';
import styles from './MapBox.module.css';

const MapBox = ({ name }) => {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [boundaries, setBoundaries] = useState({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const mapData = maps.find((map) => map.name === name);

  const viewportRef = useRef(null);
  const mapRef = useRef(null);

  function consoleLog() {
    console.log("Viewport: "+Object.values(viewportSize));
    console.log("Default MapSize: "+Object.values(mapData.size));
    console.log("Map Size: "+Object.values(mapSize));
    console.log("Scale: "+scale);
    console.log("Zoom: "+zoom);
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 1, 10));
    console.log('Zoom In');
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 1));
    console.log('Zoom Out');
  };

  //Handle Map mouse interactivity
  useEffect(() => {
    const mapViewport = document.getElementById('mapBoxViewport');
    
    const handleMouseDown = () =>  {
      setIsDragging(true);
      console.log('Mouse Down');
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    const handleMouseMove = (e) => {
      console.log('Mouse Move');
      if (isDragging) {
        setPosition((prev) => {
          let newX = prev.x + e.movementX;
          let newY = prev.y + e.movementY;
    
          //const adjusted = adjustBoundaries(newX, newY);
          return {x: newX, y: newY};
        });
      }
    };
    const handleMouseLeave = () => {
      setIsDragging(false);
      console.log('Mouse Leave');
    };

    if (!isDragging) {
      mapViewport.addEventListener('mousedown', handleMouseDown);
    } else {
      mapViewport.removeEventListener('mousedown', handleMouseDown);
      mapViewport.addEventListener('mouseup', handleMouseUp);
      mapViewport.addEventListener('mousemove', handleMouseMove);
      mapViewport.addEventListener('mouseleave', handleMouseLeave);
    };

    return () => {
      mapViewport.removeEventListener('mousedown', handleMouseDown);
      mapViewport.removeEventListener('mouseup', handleMouseUp);
      mapViewport.removeEventListener('mousemove', handleMouseMove);
      mapViewport.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging]);

  //Handle Dragging
  useEffect(() => {
    const mapContent = document.getElementById('mapContent');
    mapContent.style.transform = `translate(${position.x}px, ${position.y}px)`;
    mapContent.style.transition = 'transform 100ms ease';
  }, [position.x, position.y]);

  //Handle Map Zoom
  useEffect(() => {
    const map = document.getElementById('mapImg');
    const pins = document.getElementById('pins');

    map.style.transform = `scale(${zoom})`;
    map.style.transition = 'transform 1000ms ease';

    pins.style.transform = `scale(${zoom})`;
    pins.style.transition = 'transform 1000ms ease';

    requestAnimationFrame(() => {
      map.style.transform = `scale(${zoom})`;
      map.style.transition = 'transform 1000ms ease';
      pins.style.transform = `scale(${zoom})`;
      pins.style.transition = 'transform 1000ms ease';
    });

  }, [zoom]);

  //Handle Resize Scaling
  useEffect(() => {
    
    if(!viewportRef.current) return;

    const viewportObserver = new ResizeObserver(() => { 
      if(viewportRef.current.offsetWidth !== viewportSize.width) {
        setViewportSize({
          width: viewportRef.current.offsetWidth,
          height: viewportRef.current.offsetHeight
        });
        setMapSize({
          width: mapRef.current.offsetWidth,
          height: mapRef.current.offsetHeight
        });
        setScale(
          mapRef.current.offsetWidth / mapData.size.width
        );
      };
    });

    viewportObserver.observe(viewportRef.current);

    return () => viewportObserver.disconnect();
    
  }, [viewportRef.current]);

  consoleLog();

  return (
    <>
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.zoomButton} onClick={handleZoomIn}>+</button>
        <button className={styles.zoomButton} onClick={handleZoomOut}>-</button>
      </div>
      <div id="mapBoxViewport" className={styles.viewport} ref={viewportRef}>
        <div id="mapContent" className={styles.contents}>
          <div id="mapImg" className={styles.mapImg} ref={mapRef}>
            <img src={mapData.image} alt={`${name}`} draggable="false"/>
          </div>
          <div id="pins" className={styles.pins}>
            {
              mapData.secretRooms && mapData.secretRooms.map((room, index) => (
                <div key={index} className={styles.pin} style={{left: (room.x * scale), top: (room.y * scale)}}>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MapBox;
