import React from "react";
import dynamic from "next/dynamic";
import styles from './LeafMap.module.css';

const LeafMap = ({mapName, markers, polylines}) => {
  const MapWithNoSSR = dynamic(() => import("./Leafloader"), {
    ssr: false
  });

  return (
    <main>
      <div className={styles.leafMapContainer}>
        <MapWithNoSSR mapName={mapName} markers={markers} polylines={polylines}>
        </MapWithNoSSR>
      </div>
    </main>
  );
};

export default LeafMap;