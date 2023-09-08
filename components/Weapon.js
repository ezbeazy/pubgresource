import styles from './Weapon.module.css';
import weaponData from '../data/weapon.json';
import StatBars from '../components/StatBars';

const Weapon = ({ weaponName }) => {

  const weapon = weaponData.find(w => w.name === weaponName);
  if (!weapon) return null;

  const { class: className, image, caliber, capacity, ironSiteZero, fireSelect } = weapon;

  return (
    <div>
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Weapon" className={styles.weaponImage} />
      </div>
      <div className={styles.infoContainer}>
        <p><strong>Class:</strong> {className}</p>
        <p><strong>Caliber:</strong> {caliber}</p>
        <p><strong>Capacity:</strong> {capacity}</p>
        <p><strong>Iron Site Zero:</strong> {ironSiteZero}</p>
        <p><strong>Fire Select:</strong> {fireSelect}</p>
      </div>
    </div>
    <StatBars weaponName={weaponName}/>
    </div>
  );
};

export default Weapon;