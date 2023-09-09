import styles from './Vehicle.module.css';
import vehicleData from '../data/vehicle.json';
import StatBar from './statBar';

const Vehicle = ({ vehicleName }) => {

  const vehicle = vehicleData.find(w => w.name === vehicleName);
  if (!vehicle) return null;

  const { name, type, img, seats, shooters, trunk, amphibious, topSpeed, boost, acc, health } = vehicle;

  return (
    <div>
    <div className={styles.vehicleContainer}>
      <div className={styles.imageContainer}>
        <img src={img} alt={name} className={styles.vehicleImage} />
      </div>
      <div className={styles.infoContainer}>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Seats:</strong> {seats}</p>
        <p><strong>Shooters:</strong> {shooters}</p>
        <p><strong>Trunk:</strong> {trunk}</p>
        <p><strong>Amphibious:</strong> {amphibious}</p>
      </div>
    </div>
    <StatBar label="Top Speed" value={topSpeed} max={200} />
    <StatBar label="Boosting" value={boost} max={200} />
    <StatBar label="Acceleration" value={acc} max={10} />
    <StatBar label="Health" value={health} max={300} />
    </div>
  );
};

export default Vehicle;