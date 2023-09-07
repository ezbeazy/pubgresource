import React from 'react';
import weaponsData from '../data/weapon.json';

const DamageCurve = ({ name }) => {
  const weapon = weaponsData.find(w => w.name === name);
  const { damageCurve } = weapon || {};

  return (
    <svg width="300" height="300">
      {damageCurve && damageCurve.map((point, i) => {
        if (i === 0) return null;
        const prevPoint = damageCurve[i - 1];
        const startX = prevPoint.time;
        const startY = 300 - (prevPoint.multiplier * 300);
        const endX = point.time;
        const endY = 300 - (point.multiplier * 300);
        
        const dx = endX - startX;
        const dy = endY - startY;
        
        const c1X = startX + dx / 3 + prevPoint.outTan * dx / 3;
        const c1Y = startY + dy / 3 + prevPoint.outTan * dy / 3;
        const c2X = endX - dx / 3 - point.inTan * dx / 3;
        const c2Y = endY - dy / 3 - point.inTan * dy / 3;

        return (
          <path
            key={i}
            d={`M ${startX} ${startY} C ${c1X} ${c1Y}, ${c2X} ${c2Y}, ${endX} ${endY}`}
            stroke="yellow"
            fill="none"
          />
        );
      })}
    </svg>
  );
};

export default DamageCurve;

