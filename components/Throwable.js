import styles from './Weapon.module.css';
import weaponData from '../data/weaponData';
import StatBar from './StatBar';

const Throwable = ({ throwableName }) => {

  const throwable = weaponData.find(w => w.name === throwableName);
  if (!throwable) return null;
  
  const { class: weaponClass, type, image, link, damage, rof, range, fuse, cook, effectDuration, radius, space} = throwable;

  const dps = Math.round((1 / rof) * damage);
  const damageMax = 400;

  return (
    <div>
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Weapon" className={styles.weaponImage} />
      </div>
      <div className={styles.infoContainer}>
        <p><strong>Class:</strong> {weaponClass}</p>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Weight:</strong> {space}</p>
        <p><strong>Cook Time:</strong> {cook}</p>
      </div>
    </div>
    <h3>Stats</h3>
      <div weaponClasse={styles.statsContainer}>
        <StatBar label="Fuse" value={fuse} max={16} />
        <StatBar label="Damage" value={damage} max={damageMax} />
        <StatBar label="Damage Per Second" value={dps} max={1000} />
        <StatBar label="Effective Radius" value={radius} max={100} />
        <StatBar label="Range" value={range} max={1000} />
      </div>
    </div>
  );
};

export default Throwable;