import React, { useState, useEffect, useRef } from 'react';
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
  const layersRef = useRef(null);

  const clampPosition = (x, y) => {
    const clampedX = Math.min(Math.max(x, boundaries.minX), boundaries.maxX);
    const clampedY = Math.min(Math.max(y, boundaries.minY), boundaries.maxY);
    return { x: clampedX, y: clampedY };
  };
  
  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 1, 10));
  };
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 1));
  };
  const debouncedZoomIn = debounce(handleZoomIn, 50);
  const debouncedZoomOut = debounce(handleZoomOut, 50);

  const handleMouseDown = () =>  {
    setIsDragging(true);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition((prev) => {
        let newX = prev.x + e.movementX;
        let newY = prev.y + e.movementY;
    
        // Calculate the clamped position based on boundaries
        const clampedPosition = clampPosition(newX, newY);
        return clampedPosition;
      });
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  //Handle Listeners
  useEffect(() => {
    const viewport = document.getElementById('viewport');
   
    if (!isDragging) {
      viewport.addEventListener('mousedown', handleMouseDown);
      viewport.removeEventListener('mouseup', handleMouseUp);
      viewport.removeEventListener('mousemove', handleMouseMove);
      viewport.removeEventListener('mouseleave', handleMouseLeave);
    } else {
      viewport.removeEventListener('mousedown', handleMouseDown);
      viewport.addEventListener('mouseup', handleMouseUp);
      viewport.addEventListener('mousemove', handleMouseMove);
      viewport.addEventListener('mouseleave', handleMouseLeave);
    };

    return () => {
      viewport.removeEventListener('mousedown', handleMouseDown);
      viewport.removeEventListener('mouseup', handleMouseUp);
      viewport.removeEventListener('mousemove', handleMouseMove);
      viewport.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging]);

  //Handle Dragging
  useEffect(() => {
    const layers = document.getElementById('layers');
    layers.style.transform = `translate(${position.x}px, ${position.y}px) scale(${zoom})`;
    layers.style.transition = 'transform 50ms ease';
  }, [position]);

  useEffect(() => {
    const layers = document.getElementById('layers');
    const clampedPosition = clampPosition(position.x, position.y);

    layers.style.transform = `translate(${clampedPosition.x}px, ${clampedPosition.y}px) scale(${zoom})`;
    layers.style.transition = 'transform 1000ms ease';

  }, [zoom, boundaries]);

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
          width: layersRef.current.offsetWidth,
          height: layersRef.current.offsetHeight
        });
        setScale(
          layersRef.current.offsetWidth / mapData.size.width
        );
      };
    });

    viewportObserver.observe(viewportRef.current);

    return () => viewportObserver.disconnect();
    
  }, [viewportRef]);
  
  // Set Boundaries
  useEffect(() => {
    setBoundaries(() => {
      const minX = (viewportSize.width - (mapSize.width * zoom)) / 2;
      const maxX = ((mapSize.width * zoom) - viewportSize.width) / 2;
      const minY = (viewportSize.height - (mapSize.height * zoom)) / 2;
      const maxY = ((mapSize.height * zoom) - viewportSize.height) / 2;
      return { minX, maxX, minY, maxY };
    });
  }, [viewportSize, zoom]);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.zoomButton} onClick={debouncedZoomIn}>+</button>
        <button className={styles.zoomButton} onClick={debouncedZoomOut}>-</button>
      </div>
      <div id="viewport" className={styles.viewport} ref={viewportRef}>
        <div id="layers" className={styles.layers} ref={layersRef}>
          <div id="mapImg" className={styles.mapImg}>
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
