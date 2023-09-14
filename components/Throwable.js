import styles from './Throwable.module.css';
import weaponData from '../data/weaponData';
import StatBar from './StatBar';

const Throwable = ({ throwableName }) => {

  const throwable = weaponData.find(w => w.name === throwableName);
  if (!throwable) return null;
  
  const { class: weaponClass, type, image, link, damage, dps, rof, range, fuse, cook, effectDuration, radius, space} = throwable;

  //const dps = Math.round((1 / rof) * damage);

  return (
    <>
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Weapon" className={styles.weaponImage} />
      </div>
      <aside className={styles.aside}>
        <div className={styles.infoContainer}>
          <p><span className={styles.label}>Type:</span> {type}</p>
          <p><span className={styles.label}>Item Weight:</span> {space}</p>
          <p><span className={styles.label}>Cookable:</span> {cook}</p>
        </div>
        <div weaponClasse={styles.statsContainer}>
      <StatBar label="Fuse (s)" value={fuse} max={16} />
      <StatBar label="Max Damage" value={damage} max={225} />
      <StatBar label="Damage Per Second" value={dps} max={225} />
      <StatBar label="Effective Radius (m)" value={radius} max={100} />
      <StatBar label="Effect Duration (s)" value={effectDuration} max={20} />
      <StatBar label="Range (m)" value={range} max={100} />
    </div>
      </aside>
    </div>
    
    </>
  );
};

export default Throwable;