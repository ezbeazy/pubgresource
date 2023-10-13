import React, { useState, useEffect, useRef } from 'react';
import maps from '../data/maps.json';
import styles from './MapBox.module.css';

const MapBox = ({ name }) => {

  //Ref Variables
  const isDragging = useRef(false);
  const zoom = useRef(1);
  const scale = useRef(0);
  const boundaries = useRef({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const mapPosition = useRef({ x: 0, y: 0 });
  const mapTransformOrigin = useRef({ x: 0, y: 0 });
  const lastDrag = useRef({ x: 0, y: 0 });  
  
  //Ref Elements
  const viewportRef = useRef(null);
  const layersRef = useRef(null);
  const mapRef = useRef(null);
  const mapGridRef = useRef(null);
  const zoomInButtonRef = useRef(null);
  const zoomOutButtonRef = useRef(null);

  /*Logging
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
  };*/

  const mapData = maps.find((map) => map.name === name);

  //Put the map grid images into an array
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

  //Helper Functions
  const updateBoundaries = () => {
    
    boundaries.current = {
      minX: (viewportRef.current.offsetWidth - (mapRef.current.offsetWidth * zoom.current)) / 2,
      maxX: ((mapRef.current.offsetWidth * zoom.current) - viewportRef.current.offsetWidth) / 2,
      minY: (viewportRef.current.offsetHeight - (mapRef.current.offsetHeight * zoom.current)) / 2,
      maxY: ((mapRef.current.offsetHeight * zoom.current) - viewportRef.current.offsetHeight) / 2,
    };

  };

  const updateMapSize = () => {
    mapSizeRef.current = {
      width: (viewport.width * zoomRef.current),
      height: (viewport.height * zoomRef.current)
    };
  };

  const updateScale = () => {
    scale.current = (mapRef.current.offsetWidth * zoom.current) / mapData.size.width;
    console.log('Update Scale: ', scale.current);
  };

  const updateTransformOrigin = () => {
    if (!viewportRef.current || !mapRef.current) return;
  
    // 1. Get the viewport's center
    const viewportCenterX = viewportRef.current.offsetWidth / 2;
    const viewportCenterY = viewportRef.current.offsetHeight / 2;
  
    // 2. Calculate the map's point
    const mapPointX = viewportCenterX - mapPosition.current.x;
    const mapPointY = viewportCenterY - mapPosition.current.y;
  
    // 3. Update transform origin ref
    mapTransformOrigin.current = { x: mapPointX, y: mapPointY };
  };

  const clampPosition = (x,y) => {
    const clampedX = Math.min(Math.max(x, boundaries.current.minX), boundaries.current.maxX);
    const clampedY = Math.min(Math.max(y, boundaries.current.minY), boundaries.current.maxY);
    return { x: clampedX, y: clampedY };
  };

  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const zoomIn = debounce(() => {
    zoom.current = Math.min(zoom.current * 2, 16);
    updateScale();
    updateBoundaries();
    setZoom(zoomRef.current);
  });
  
  const handleZoomOut = debounce(() => {
    zoomRef.current = Math.max(zoomRef.current - 1, 1);
    updateBoundaries();
    setZoom(zoomRef.current);

  const debouncedZoomIn = debounce(handleZoomIn, 50);
  const debouncedZoomOut = debounce(handleZoomOut, 50);

    if (mapRef.current) {
      
      mapGridRef.current.style.transform = `scale(${zoom.current})`;
      mapGridRef.current.style.transition = 'transform 1000ms ease';
      const { x: clampedX, y: clampedY } = clampPosition(mapPosition.current.x, mapPosition.current.y);
      mapPosition.current = {x: clampedX, y: clampedY};
      mapRef.current.style.transform = `translate(${mapPosition.current.x}px, ${mapPosition.current.y}px)`;
      mapRef.current.style.transition = 'translate 50ms ease';
      mapGridRef.current.style.transformOrigin = `${mapTransformOrigin.current.x}px ${mapTransformOrigin.current.y}px`;
    }
    
    console.log('zoom in');
  }, 100);

  const zoomOut = debounce(() => {
    zoom.current = Math.max(zoom.current / 2, 1);
    updateScale();
    updateBoundaries();

    if (mapRef.current) {

      mapGridRef.current.style.transform = `scale(${zoom.current})`;
      mapGridRef.current.style.transition = 'transform 1000ms ease';
      const { x: clampedX, y: clampedY } = clampPosition(mapPosition.current.x, mapPosition.current.y);
      mapPosition.current = {x: clampedX, y: clampedY};
      mapRef.current.style.transform = `translate(${mapPosition.current.x}px, ${mapPosition.current.y}px)`;
      mapRef.current.style.transition = 'translate 50ms ease';
      //mapGridRef.current.style.transformOrigin = `${mapTransformOrigin.current.x}px ${mapTransformOrigin.current.y}px`;
    }
    console.log('zoom out');
  }, 100);

  useEffect(() => {
    const viewport = viewportRef.current;
    const map = mapRef.current;

    //Event Handler Functions
  const handleMouseDown = e => {
    if (e.type === 'touchstart') {
      e.preventDefault(); // Prevent default touch behaviors like scrolling.
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    } else {
      startDrag(e.clientX, e.clientY);
    };
    handleListeners(); 
    console.log('mousedown');
    console.log('mouse position: ', e.clientX, e.clientY);
    console.log('last drag: ', Object.values(lastDrag.current));
  };

  const startDrag = (x, y) => {
    isDragging.current = true;
    lastDrag.current = { x: x, y: y };
    console.log(isDragging);
    console.log('last drag: ', Object.values(lastDrag.current));
  };

  const handleMouseMove = e => {
    handleDrag(e);
  };

  const handleDrag = (e) => {

    let movementX, movementY;

    if (e.type === 'touchmove') {
      e.preventDefault();
      movementX = e.touches[0].clientX - lastDrag.current.x;
      movementY = e.touches[0].clientY - lastDrag.current.y;
      lastDrag.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else {
      movementX = e.movementX;
      movementY = e.movementY;
    }

    const newX = mapPosition.current.x + movementX;
    const newY = mapPosition.current.y + movementY;

    const { x: clampedX, y: clampedY } = clampPosition(newX, newY);
    mapPosition.current = { x: clampedX, y: clampedY };
  
    map.style.transform = `translate(${mapPosition.current.x}px, ${mapPosition.current.y}px)`;
    map.style.transition = 'translate 50ms ease';
    updateTransformOrigin();
    console.log('mapRef position', mapPosition.current.x, mapPosition.current.y)
  };

  const endDrag = () => {
    isDragging.current = false;
    handleListeners();
    console.log('drag ended');
  };

  const handleMouseUp = () => {
    endDrag(); 
    handleListeners();
    console.log('mouseup');
  };

  const handleMouseLeave = (e) => {
    endDrag();
    if (e.type === 'touchcancel') {
     e.preventDefault(); // Prevent mouse event emulation
    };
    handleListeners();
    console.log('mouse left');
  };

    //Store interaction events in an object
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
    const handleListeners = () => {
      console.log('listeners handled')
      if (!isDragging.current) {
        for (const [event, handler] of Object.entries(hciEvents)) {
          if (event === 'mousedown' || event === 'touchstart') {
            viewport.addEventListener(event, handler);
          } else {
            viewport.removeEventListener(event, handler);
          }
        }
      } else {
        for (const [event, handler] of Object.entries(hciEvents)) {
          if (event !== 'mousedown' && event !== 'touchstart') {
            viewport.addEventListener(event, handler);
          } else {
            viewport.removeEventListener(event, handler);
          }
        }
      }
    };
    handleListeners();

    return () => {
      for (const [event, handler] of Object.entries(hciEvents)) {
        viewport.removeEventListener(event, handler);
      };
    };
  });

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
      updateScale();
      updateTransformOrigin();
      //mapGridRef.current.style.transformOrigin = `${mapTransformOrigin.current.x}px ${mapTransformOrigin.current.y}px`;
    });

    viewportObserver.observe(viewport);

    console.log(boundaries.current);

    return () => {
      //Cleanup on unmount
      viewportObserver.disconnect();
      for (const [event, handler] of Object.entries(hciEvents)) {
        viewport.removeEventListener(event, handler);
      };
    };
  }, []);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={styles.zoomButton} ref={zoomInButtonRef} onClick={zoomIn} onTouchEnd={zoomIn}>+</button>
        <button className={styles.zoomButton} ref={zoomOutButtonRef} onClick={zoomOut} onTouchEnd={zoomOut}>-</button>
      </div>
      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.map} ref={mapRef}>
        <div className={styles.layers} ref={layersRef}>
          <div className={styles.mapGrid} ref={mapGridRef}>
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
                  style={{left: (room.x), top: (room.y)}}>
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
