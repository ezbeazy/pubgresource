import styles from './Melee.module.css';
import weaponData from '../data/weaponData';
import StatBar from './StatBar';

const MAX_RANGE = 100;
const MAX_DAMAGE = 100;

const Melee = ({ meleeName }) => {
  const meleeWeapon = weaponData.find(w => w.name === meleeName);

  if (!meleeWeapon) {
    return <div>Error: Melee weapon not found</div>;
  }
  
  const { class: weaponClass, type, image, link, meleeDamage, damage, range, space} = meleeWeapon;

  return (
    <>
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={`Melee Weapon: ${meleeName}`} className={styles.weaponImage} />
      </div>
      <aside className={styles.aside}>
        <div className={styles.infoContainer}>
          <p><span className={styles.label}>Class:</span> {weaponClass}</p>
          <p><span className={styles.label}>Type:</span> {type}</p>
        </div>
        <div className={styles.statsContainer}>
          <StatBar label="Range" value={range} max={MAX_RANGE} />
          <StatBar label="Melee Damage" value={meleeDamage} max={MAX_DAMAGE} />
          <StatBar label="Throw Damage" value={damage} max={MAX_DAMAGE} />
        </div>
      </aside>
    </div>
    </>
  );
};

export default Melee;