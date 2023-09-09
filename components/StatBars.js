import styles from './StatBars.module.css';
import weaponData from '../data/weapon.json';
import StatBar from './StatBar';

const StatBars = ({ weaponName }) => {

  const weapon = weaponData.find(w => w.name === weaponName);

  if (!weapon) return null;

  const { class: className, type, damage, rof, velocity, range } = weapon;
  const dps = Math.round((1 / rof) * damage);
  const rpm = Math.round((1 / rof) * 60);

  let rofMax;
  let damageMax;

  if(type == "AP" || type == "MISC" || type == "SG"){
    rofMax = 3;
  } else {
    rofMax = 2;
  }

  if(type == "AP") {
    damageMax = 300;
  } else {
    damageMax = 125;
  };

  /*Invert ROF for StatBar fill*/
  const invertRof = rofMax - rof;

  if ( className == "Melee" ) {
    return (
      <div className={styles.statsContainer}>
        <h3>Stats</h3>
        <StatBar label="Damage" value={damage} max={damageMax} />
        <StatBar label="Range" value={range} max={1000} />
      </div>
    );
  } else if ( className == "Throwable" ) {
    return (
      <div className={styles.statsContainer}>
        <h3>Stats</h3>
        <StatBar label="Damage" value={damage} max={damageMax} />
        <StatBar label="Damage Per Second" value={dps} max={1000} />
        <StatBar label="Effective Radius" value={rof} fill={invertRof} max={3} />
        <StatBar label="Range" value={range} max={1000} />
      </div>
    );
  } else {
    return (
      <div className={styles.statsContainer}>
        <h3>Stats</h3>
        <StatBar label="Damage" value={damage} max={damageMax} />
        <StatBar label="Damage Per Second" value={dps} max={1000} />
        <StatBar label="Rate of Fire" value={rof} fill={invertRof} max={3} />
        <StatBar label="Rounds Per Minute" value={rpm} max={1500} />
        <StatBar label="Muzzle Velocity" value={velocity} max={1200} />
        <StatBar label="Range" value={range} max={1000} />
      </div>
    );
  };
};

export default StatBars;

