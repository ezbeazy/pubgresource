import React, { useState, useEffect, useRef, use } from 'react';
import maps from '../data/maps.json';
import styles from './MapBox.module.css';

const MapBox = ({ name }) => {
  const viewportSizeRef = useRef({ width: 0, height: 0 });
  const mapSizeRef = useRef({ width: 0, height: 0 });
  const zoomRef = useRef(1);
  const scaleRef = useRef(0);
  const boundariesRef = useRef({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const isDraggingRef = useRef(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const mapData = maps.find((map) => map.name === name);
  const viewportRef = useRef(null);
  const layersRef = useRef(null);

  const consoleLog = (location) => {
    console.log(" ** NEW LOG ** "+location);
    console.log('viewport ', Object.values(viewport));
    console.log('viewportSizeRef ', Object.values(viewportSizeRef.current));
    console.log('mapSizeRef: ', Object.values(mapSizeRef.current));
    console.log('zoomRef: ', zoomRef.current);
    console.log('zoom: ', zoom);
    console.log('scale: ', scaleRef.current);
    console.log('position: ', Object.values(position));
    console.log('boundaries: ', Object.values(boundariesRef.current));
  };

  const mapGridImageArray = (() => {
    const imageArray = [];
    
    for (let row = 1; row <= 32; row++) {
      for (let col = 1; col <= 32; col++) {
        const counter = (row - 1) * 32 + col;
        const paddedCounter = String(counter).padStart(2, '0');
        const fileName = `${mapData.name}_tile_${paddedCounter}.webp`;
  
        imageArray.push({
          fileName,
          row,
          col,
        });
      };
    };
    
    return imageArray;
  })();

  const updateBoundaries = () => {

    console.log('viewport.width:'+viewport.width);
    console.log('mapSizeRef.current.width:'+mapSizeRef.current.width);
    console.log('zoomRef:'+zoomRef.current);
    
    boundariesRef.current = {
      minX: (viewport.width - (mapSizeRef.current.width * zoomRef.current)) / 2,
      maxX: ((mapSizeRef.current.width * zoomRef.current) - viewport.width) / 2,
      minY: (viewport.height - (mapSizeRef.current.height * zoomRef.current)) / 2,
      maxY: ((mapSizeRef.current.height * zoomRef.current) - viewport.height) / 2,
    };

    console.log(Object.values(boundariesRef.current));
  };

  const updateMapSize = () => {
    mapSizeRef.current = {
      width: (viewport.width * zoomRef.current),
      height: (viewport.height * zoomRef.current)
    };
    console.log('updateMapSize')
  };

  const updateScale = () => {
    scaleRef.current = (viewportRef.current.offsetWidth * zoom) / mapData.size.width;
  };

  const clampPosition = (x, y) => {
    const clampedX = Math.min(Math.max(x, boundariesRef.current.minX), boundariesRef.current.maxX);
    const clampedY = Math.min(Math.max(y, boundariesRef.current.minY), boundariesRef.current.maxY);
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
    zoomRef.current = Math.min(zoomRef.current + 1, 10);
    updateBoundaries();
    console.log('zoom in: ', zoomRef.current);
    setZoom(zoomRef.current);
  };
  const handleZoomOut = () => {
    zoomRef.current = Math.max(zoomRef.current - 1, 1);
    updateBoundaries();
    console.log('zoom out: ', zoomRef.current);
    setZoom(zoomRef.current);
  };
  const debouncedZoomIn = debounce(handleZoomIn, 50);
  const debouncedZoomOut = debounce(handleZoomOut, 50);

  const handleMouseDown = (e) =>  {
    if (e.type === 'touchstart') {
      e.preventDefault(); 
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    isDraggingRef.current = true;
    handleLiseners();
  };
  const handleMouseUp = (e) => {
    if (e.type === 'touchend') {
      e.preventDefault(); 
    }
    isDraggingRef.current = false;
    handleLiseners();
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      let movementX, movementY;
      if (e.type === 'touchmove') {
        e.preventDefault();
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        movementX = currentX - touchStartRef.current.x;
        movementY = currentY - touchStartRef.current.y;
        touchStartRef.current = { x: currentX, y: currentY };
      } else {
        movementX = e.movementX;
        movementY = e.movementY;
      };
      setPosition((prev) => {
        let newX = prev.x + movementX;
        let newY = prev.y + movementY;
        const clampedPosition = clampPosition(newX, newY);
        return clampedPosition;
      });
    };
  };

  const handleMouseLeave = (e) => {
    isDraggingRef.current = false;
    if (e.type === 'touchcancel') {
      e.preventDefault(); // Prevent mouse event emulation
    };
    handleLiseners();
  };

  const hciEvents = {
    'mousedown': handleMouseDown,
    'mouseup': handleMouseUp,
    'mousemove': handleMouseMove,
    'mouseleave': handleMouseLeave,
    'touchstart': handleMouseDown,
    'touchend': handleMouseUp,
    'touchmove': handleMouseMove,
    'touchcancel': handleMouseLeave
  };

  //Handle Listeners
  const handleLiseners = () => {
    const viewport = document.getElementById('viewport');
    
    if (!isDraggingRef.current) {
      for (const [event, handler] of Object.entries(hciEvents)) {
        if (event === 'mousedown' || event === 'touchstart') {
          viewport.addEventListener(event, handler);
        } else {
          viewport.removeEventListener(event, handler);
        }
      };
    } else {
      for (const [event, handler] of Object.entries(hciEvents)) {
        if (event !== 'mousedown' && event !== 'touchstart') {
          viewport.addEventListener(event, handler);
        } else {
          viewport.removeEventListener(event, handler);
        };
      };
    };

    return () => {
      for (const [event, handler] of Object.entries(hciEvents)) {
        viewport.removeEventListener(event, handler);
      };
    };
  };

  //Render Dragging
  useEffect(() => {
    const layers = layersRef.current;
    layers.style.transform = `translate(${position.x}px, ${position.y}px) scale(${zoom})`;
    layers.style.transition = 'transform 50ms ease';
  }, [position]);

  //Render Zooming
  useEffect(() => {
    const layers = layersRef.current;
    const clampedPosition = clampPosition(position.x, position.y);
    layers.style.transform = `translate(${clampedPosition.x}px, ${clampedPosition.y}px) scale(${zoom})`;
    layers.style.transition = 'transform 1000ms ease';
  }, [zoom]);

  //Render Resize
  useEffect(() => {
    updateMapSize();
    updateBoundaries();
    updateScale();
  }, [viewport]);

  //Initialize Observers
  useEffect(() => {
    
    // Initialize only if the refs are available
    if(!viewportRef.current || !layersRef.current) return;

    // Handling resizing for viewport and layers
    const viewportObserver = new ResizeObserver(() => { 
      setViewport({
        width: viewportRef.current.offsetWidth,
        height: viewportRef.current.offsetHeight
      });
      consoleLog('viewportObserver');
      updateScale();
    });

    viewportObserver.observe(viewportRef.current);

    // Handle Event Listeners on Mount and Unmount
    const viewport = document.getElementById('viewport');
    viewport.addEventListener('mousedown', handleMouseDown);
    viewport.addEventListener('touchstart', handleMouseDown);

    return () => {
      viewportObserver.disconnect(); 
      for (const [event, handler] of Object.entries(hciEvents)) {
        viewport.removeEventListener(event, handler);
      };
    };
    
  }, []);
  
  consoleLog('before return');

  return (
    <>
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.zoomButton} onClick={debouncedZoomIn}>+</button>
        <button className={styles.zoomButton} onClick={debouncedZoomOut}>-</button>
      </div>
      <div id="viewport" className={styles.viewport} ref={viewportRef}>
        <div id="layers" className={styles.layers} ref={layersRef}>
          <div className={styles.gridContainer}>
            {mapGridImageArray.map((gridImage, index) => {
              const imagePath = `${mapData.gridImages}/${gridImage.fileName}`;
              return (
                <img
                  key={index}
                  src={imagePath}
                  alt={gridImage.fileName}
                  className="gridImage"
                  style={{
                    gridRow: gridImage.row,
                    gridColumn: gridImage.col,
                  }}
                />
              );
            })}
          </div>
          <div id="pins" className={styles.pins}>
            { mapData.secretRooms && mapData.secretRooms.map((room, index) => (
                <div 
                  key={index} 
                  className={styles.pin} 
                  style={{left: (room.x * scaleRef.current), top: (room.y * scaleRef.current)}}>
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
