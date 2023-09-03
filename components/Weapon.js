import styles from './Weapon.module.css';
import weaponsData from '../data/weapons.json';

const Weapon = ({ weaponName }) => {

  const weapon = weaponsData.find(w => w.name === weaponName);
  if (!weapon) return null;

  const { image, caliber, capacity, ironSiteZero } = weapon;

  return (
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Weapon" className={styles.weaponImage} />
      </div>
      <div className={styles.infoContainer}>
        <p><strong>Caliber:</strong> {caliber}</p>
        <p><strong>Capacity:</strong> {capacity}</p>
        <p><strong>Iron Site Zero:</strong> {ironSiteZero}</p>
      </div>
    </div>
  );
};

export default Weapon;