import styles from './StatsBar.module.css';
import weaponsData from '../data/weapons.json';

const StatsBar = ({ weaponName }) => {

  const weapon = weaponsData.find(w => w.name === weaponName);

  if (!weapon) return null;

  const { damage, dps, rof, velocity, range, stability } = weapon;


  const rangeMax = 800;
  const rofMax = 3;
  const velMax = 1000;

  const invertedRof = (rof, max) => 100 - ((rof/max)*100);
  const standardEquation = (value, max) => (value / max) * 100;

  return (
    <div className={styles.statsContainer}>
      <h3>Stats</h3>
      {renderStat('Damage', damage, standardEquation)}
      {renderStat('DPS', dps, standardEquation)}
      {renderStat('ROF', rof, invertedRof, rofMax)}
      {renderStat('Velocity', velocity, standardEquation, velMax)}
      {renderStat('Range', range, standardEquation, rangeMax)}
      {renderStat('Stability', stability, standardEquation)}
    </div>
  );
};

const renderStat = (label, value, equation, max = 100) => (
  <div className={styles.statsWrapper}>
    <span className={styles.statsLabel}>{label}:</span>
    <div className={styles.barContainer}>
      <div className={styles.bar} style={{ width: `${equation(value, max)}%` }}>
        <span className={styles.indicator}>{value}</span>
      </div>
    </div>
  </div>
);

export default StatsBar;

