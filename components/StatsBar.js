import styles from './StatsBar.module.css';
import weaponsData from '../data/weapon.json';

const StatsBar = ({ weaponName }) => {

  const weapon = weaponsData.find(w => w.name === weaponName);

  if (!weapon) return null;

  const { damage, rof, velocity, range, stability } = weapon;
  const dps = Math.round((1 / rof) * damage);
  const rpm = Math.round((1 / rof) * 60);

  const rangeMax = 800;
  const rofMax = 3;
  const velMax = 1000;
  const damageMax = 125;
  
  /*EQUATIONS*/
  const invertedRof = (rof, max) => 100 - ((rof/max)*100);
  const standardEquation = (value, max) => (value / max) * 100;

  return (
    <div className={styles.statsContainer}>
      <h3>Stats</h3>
      {renderStat('Damage', damage, standardEquation, damageMax)}
      {renderStat('Damage Per Second', dps, standardEquation, 1000)}
      {renderStat('Rate of Fire', rof, invertedRof, rofMax)}
      {renderStat('Rounds Per Minute', rpm, standardEquation, 1500)}
      {renderStat('Muzzle Velocity', velocity, standardEquation, velMax)}
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

