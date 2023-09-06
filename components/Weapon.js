import styles from './Weapon.module.css';
import weaponsData from '../data/weapon.json';
import StatsBar from '../components/StatsBar';

const Weapon = ({ weaponName }) => {

  const weapon = weaponsData.find(w => w.name === weaponName);
  if (!weapon) return null;

  const { image, caliber, capacity, ironSiteZero, fireSelect } = weapon;

  return (
    <div>
    <div className={styles.weaponContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Weapon" className={styles.weaponImage} />
      </div>
      <div className={styles.infoContainer}>
        <p><strong>Caliber:</strong> {caliber}</p>
        <p><strong>Capacity:</strong> {capacity}</p>
        <p><strong>Iron Site Zero:</strong> {ironSiteZero}</p>
        <p><strong>Fire Select:</strong> {fireSelect}</p>
      </div>
    </div>
    <StatsBar weaponName={weaponName}/>
    </div>
  );
};

export default Weapon;