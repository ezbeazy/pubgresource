import styles from './StatBars.module.css';
import weaponsData from '../data/weapon.json';
import StatBar from './statBar';

const StatBars = ({ weaponName }) => {

  const weapon = weaponsData.find(w => w.name === weaponName);

  if (!weapon) return null;

  const { damage, rof, velocity, range } = weapon;
  const dps = Math.round((1 / rof) * damage);
  const rpm = Math.round((1 / rof) * 60);

  /*Invert ROF for StatBar fill*/
  const rofMax = 3;
  const invertRof = rofMax - rof;

  return (
    <div className={styles.statsContainer}>
      <h3>Stats</h3>
      <StatBar label="Damage" value={damage} max={125} />
      <StatBar label="Damage Per Second" value={dps} max={1000} />
      <StatBar label="Rate of Fire" value={rof} fill={invertRof} max={3} />
      <StatBar label="Rounds Per Minute" value={rpm} max={1500} />
      <StatBar label="Muzzle Velocity" value={velocity} max={1200} />
      <StatBar label="Range" value={range} max={1000} />
    </div>
  );
};

export default StatBars;

