import styles from './Throwable.module.css';
import weaponData from '../data/weaponData';
import StatBar from './StatBar';

const Throwable = ({ name }) => {

  const throwable = weaponData.find(w => w.name === name);

  if (!throwable) {
    return <div>Error: Weapon not found</div>;
  };
  
  const { class: weaponClass, type, image, link, damage, dps, rof, range, fuse, cook, effectDuration, radius, space} = throwable;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={name}/>
      </div>
      <aside>
        <div className={styles.info}>
          <p><span className={styles.label}>Type:</span> {type}</p>
          <p><span className={styles.label}>Item Weight:</span> {space}</p>
          <p><span className={styles.label}>Cookable:</span> {cook}</p>
        </div>
        <div weaponClasse={styles.stats}>
          <StatBar label="Fuse (s)" value={fuse} max={16} />
          <StatBar label="Max Damage" value={damage} max={225} />
          <StatBar label="Damage Per Second" value={dps} max={225} />
          <StatBar label="Effective Radius (m)" value={radius} max={100} />
          <StatBar label="Effect Duration (s)" value={effectDuration} max={20} />
          <StatBar label="Range (m)" value={range} max={100} />
        </div>
      </aside>
    </div>
  );
};

export default Throwable;