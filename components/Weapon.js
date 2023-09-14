import styles from './Weapon.module.css';
import weaponData from '../data/weaponData';
import StatBar from './StatBar';

const Weapon = ({ name }) => {
  const weapon = weaponData.find(w => w.name === name);

  if (!weapon) {
    return <div>Error: Weapon not found</div>;
  }
  
  const { class: weaponClass, type, image, link, caliber, capacity, ironSiteZero, fireSelect, damage, rof, velocity, range} = weapon;

  const dps = Math.round((1 / rof) * damage);
  const rpm = Math.round((1 / rof) * 60);

  let MAX_ROF;
  let MAX_DAMAGE;

  if(type == "AP" || type == "MISC" || type == "SG"){
    MAX_ROF = 3;
  } else {
    MAX_ROF = 2;
  }

  if(type == "AP") {
    MAX_DAMAGE = 300;
  } else {
    MAX_DAMAGE = 125;
  };
 
  /*Invert ROF for StatBar fill*/
  const invertRof = MAX_ROF - rof;

  return (
    <div>
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Weapon" className={styles.weaponImage} />
      </div>
      <aside className={styles.aside}>
      <div className={styles.infoContainer}>
        <p><strong>Caliber:</strong> {caliber}</p>
        <p><strong>Capacity:</strong> {capacity}</p>
        <p><strong>Iron Site Zero:</strong> {ironSiteZero}</p>
        <p><strong>Fire Select:</strong> {fireSelect}</p>
      </div>
      </aside>
    </div>
    <div weaponClass={styles.statsContainer}>
      <StatBar label="Damage" value={damage} max={MAX_DAMAGE} />
      <StatBar label="Damage Per Second" value={dps} max={1000} />
      <StatBar label="Rate of Fire" value={MAX_ROF} fill={invertRof} max={3} />
      <StatBar label="Rounds Per Minute" value={rpm} max={1500} />
      <StatBar label="Muzzle Velocity" value={velocity} max={1200} />
      <StatBar label="Range" value={range} max={1000} />
    </div>
    </div>
  );
};

export default Weapon;