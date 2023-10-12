import React, { useState, useEffect, useRef, use } from 'react';
import maps from '../data/maps.json';
import styles from './MapBox.module.css';

const MapBox = ({ name }) => {
  const vieportSize = useRef({ width: 0, height: 0 });
  const mapSize = useRef({ width: 0, height: 0 });
  const zoom = useRef(1);
  const scale = useRef(0);
  const boundaries = useRef({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const isDragging = useRef(false);
  const touchStart = useRef({ x: 0, y: 0 });
  const [zoomState, setZoomState] = useState(1);
  const [positionState, setPositionState] = useState({ x: 0, y: 0 });
  const [viewportState, setViewportState] = useState({ width: 0, height: 0 });

  const mapData = maps.find((map) => map.name === name);
  const viewportRef = useRef(null);
  const layersRef = useRef(null);
  const mapRef = useRef(null);

  const consoleLog = (location) => {
    console.log(" ** NEW LOG ** "+location);
    
    console.log('viewportState ', Object.values(viewportState));
    console.log('vieportSize ', Object.values(vieportSize.current));
    console.log('mapSize: ', Object.values(mapSize.current));
    console.log('zoom: ', zoom.current);
    console.log('zoomState: ', zoomState);
    console.log('scale: ', scale.current);
    console.log('positionState: ', Object.values(positionState));
    console.log('boundaries: ', Object.values(boundaries.current));

    console.log(" ** REF ELEMENTS ** ");
    console.log('viewportRef width: ', viewportRef.current.offsetWidth);
    console.log('layersRef width: ', layersRef.current.offsetWidth);
    console.log('mapRef width: ', mapRef.current.offsetWidth);
    
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
    console.log('!!!!!UPDATE BOUNDARIES!!!!!');

    console.log('viewportRef.current.offsetWidth: ', viewportRef.current.offsetWidth);
    console.log('mapSize.current.width: ', mapSize.current.width);
    boundaries.current = {
      minX: (viewportRef.current.offsetWidth - (mapRef.current.offsetWidth * zoom.current)) / 2,
      maxX: ((mapRef.current.offsetWidth * zoom.current) - viewportRef.current.offsetWidth) / 2,
      minY: (viewportRef.current.offsetHeight - (mapRef.current.offsetHeight * zoom.current)) / 2,
      maxY: ((mapRef.current.offsetHeight * zoom.current) - viewportRef.current.offsetHeight) / 2,
    };
  };

  const updateMapSize = () => {
    console.log('!!!!!UPDATE MAPSIZE!!!!!');
    mapSize.current = {
      width: (mapRef.current.offsetWidth * zoom.current),
      height: (mapRef.current.offsetHeight * zoom.current)
    };
    
  };

  const updateScale = () => {
    console.log('!!!!!UPDATE SCALE!!!!!');
    scale.current = (viewportRef.current.offsetWidth * zoom.current) / mapData.size.width;
  };

  const clampPosition = (x, y) => {
    const clampedX = Math.min(Math.max(x, boundaries.current.minX), boundaries.current.maxX);
    const clampedY = Math.min(Math.max(y, boundaries.current.minY), boundaries.current.maxY);
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
    zoom.current = Math.min(zoom.current + 1, 10);
    updateMapSize();
    updateScale();
    updateBoundaries();
    setZoomState(zoom.current);
  };
  const handleZoomOut = () => {
    zoom.current = Math.max(zoom.current - 1, 1);
    updateMapSize();
    updateScale();
    updateBoundaries();
    setZoomState(zoom.current);
  };
  const debouncedZoomIn = debounce(handleZoomIn, 50);
  const debouncedZoomOut = debounce(handleZoomOut, 50);

  const handleMouseDown = (e) =>  {
    if (e.type === 'touchstart') {
      e.preventDefault(); 
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    isDragging.current = true;
    handleLiseners();
  };
  const handleMouseUp = (e) => {
    if (e.type === 'touchend') {
      e.preventDefault(); 
    }
    isDragging.current = false;
    handleLiseners();
  };
  /*
  const handleMouseMove = (e) => {
    if (isDragging.current) {
      let movementX, movementY;
      if (e.type === 'touchmove') {
        e.preventDefault();
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        movementX = currentX - touchStart.current.x;
        movementY = currentY - touchStart.current.y;
        touchStart.current = { x: currentX, y: currentY };
      } else {
        movementX = e.movementX;
        movementY = e.movementY;
      };
      setPositionState((prev) => {
        let newX = prev.x + movementX;
        let newY = prev.y + movementY;
        const clampedPosition = clampPosition(newX, newY);
        return clampedPosition;
      });
    };
  };*/

  const handleMouseMove = (e) => {
    if (!viewportRef.current || !layersRef.current) return;

    // Get the viewport's position
    const viewportRect = viewportRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the viewport
    const mouseX = e.clientX - viewportRect.left;
    const mouseY = e.clientY - viewportRect.top;

    // Reposition the map div
    layersRef.current.style.left = `${mouseX}px`;
    layersRef.current.style.top = `${mouseY}px`;
  };

  const handleMouseLeave = (e) => {
    isDragging.current = false;
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
    
    if (!isDragging.current) {
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
    //layers.style.transform = `translate(${positionState.x}px, ${positionState.y}px)`;
    //layers.style.transition = 'transform 50ms ease';
  }, [positionState]);

  //Initialize Observers
  useEffect(() => {
    
    // Initialize only if the refs are available
    if(!viewportRef.current || !layersRef.current || !mapRef.current) return;
    
    mapSize.current = {
      width: mapRef.current.offsetWidth,
      height: mapRef.current.offsetHeight
    }
    //updateScale();
    //updateBoundaries();

    // Handling resizing for viewportState and layers
    const viewportObserver = new ResizeObserver(() => { 
      
      updateMapSize();
      //updateScale();
      //updateBoundaries();

      setViewportState({
        width: viewportRef.current.offsetWidth,
        height: viewportRef.current.offsetHeight
      });
    });

    viewportObserver.observe(viewportRef.current);

    // Handle Event Listeners on Mount and Unmount
    const viewport = document.getElementById('viewport');
    viewport.addEventListener('mousedown', handleMouseDown);
    viewport.addEventListener('touchstart', handleMouseDown);

    consoleLog('On Mount');

    return () => {
      viewportObserver.disconnect(); 
      for (const [event, handler] of Object.entries(hciEvents)) {
        viewport.removeEventListener(event, handler);
      };
    };
    
  }, []);

   //Render Zooming
   useEffect(() => {
    const map = mapRef.current;
    const layers = layersRef.current;
    const clampedPosition = clampPosition(positionState.x, positionState.y);

    console.log('clamped x: ', clampedPosition.x);
    console.log('clamped y: ', clampedPosition.y);

    //layers.style.width = `${mapSize.current.width}px`;
    //layers.style.height = `${mapSize.current.height}px`;
    //layers.style.transform = `translate(${clampedPosition.x}px, ${clampedPosition.y}px)`;
    //layers.style.transition = 'transform 1000ms ease';

    map.style.transform = `scale(${zoomState})`;
    map.style.transition = 'transform 1000ms ease';
    
    
    consoleLog('Render Zooming');
    
  }, [zoomState]);

  //Render Viewport Resize
  useEffect(() => {
    //mapRef.current.style.width = (mapSize.current.width * zoom.current);
    //mapRef.current.style.height = (mapSize.current.height * zoom.current);

    updateScale();
    updateBoundaries();
  }, [viewportState]);
  

  return (
    <>
    <div className={styles.container}>
      <div>{scale.current}</div>
      <div className={styles.buttons}>
        <button className={styles.zoomButton} onClick={debouncedZoomIn}>+</button>
        <button className={styles.zoomButton} onClick={debouncedZoomOut}>-</button>
      </div>
      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.map} ref={mapRef}>
        <div className={styles.layers} ref={layersRef}>
          <div className={styles.gridContainer} ref={mapGridRef}>
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
                  draggable="false"
                />
              );
            })}
          </div>
          <div id="pins" className={styles.pins}>
            { mapData.secretRooms && mapData.secretRooms.map((room, index) => (
                <div 
                  key={index} 
                  className={styles.pin} 
                  style={{left: (room.x * scale.current), top: (room.y * scale.current)}}>
                </div>
              ))
            }
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MapBox;
