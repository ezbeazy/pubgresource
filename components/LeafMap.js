import React from "react";
import dynamic from "next/dynamic";
import styles from './LeafMap.module.css';

const LeafMap = () => {
  const MapWithNoSSR = dynamic(() => import("./Leafloader"), {
    ssr: false
  });

  return (
    <main>
      <div className={styles.leafMapContainer}>
        <MapWithNoSSR />
      </div>
    </main>
  );
};

export default LeafMap;