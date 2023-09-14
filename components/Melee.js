import styles from './Melee.module.css';
import weaponData from '../data/weaponData';
import StatBar from './StatBar';

const Melee = ({ meleeName }) => {

  const melee = weaponData.find(w => w.name === meleeName);
  if (!melee) return null;
  
  const { class: weaponClass, type, image, link, meleeDamage, damage, range, space} = melee;

  return (
    <>
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Weapon" className={styles.weaponImage} />
      </div>
      <aside className={styles.aside}>
        <div className={styles.infoContainer}>
          <p><span className={styles.label}>Class:</span> {weaponClass}</p>
          <p><span className={styles.label}>Type:</span> {type}</p>
        </div>
        <div weaponClasse={styles.statsContainer}>
          <StatBar label="Range" value={range} max={100} />
          <StatBar label="Melee Damage" value={meleeDamage} max={100} />
          <StatBar label="Throw Damage" value={damage} max={100} />
        </div>
      </aside>
    </div>
    </>
  );
};

export default Melee;