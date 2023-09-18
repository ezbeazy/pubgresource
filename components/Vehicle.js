import styles from './Vehicle.module.css';
import vehicleData from '../data/vehicle.json';
import StatBar from './StatBar';

const Vehicle = ({ name }) => {

  const vehicle = vehicleData.find(w => w.name === name);
  if (!vehicle) {
    return <div>Error: Vehicle not found</div>;
  };

  const { type, img, seats, shooters, trunk, amphibious, topSpeed, boost, acc, health } = vehicle;

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <img src={img} alt={name}/>
        </div>
        <aside className={styles.info}>
          <p><strong>Type:</strong> {type}</p>
          <p><strong>Seats:</strong> {seats}</p>
          <p><strong>Shooters:</strong> {shooters}</p>
          <p><strong>Trunk:</strong> {trunk}</p>
          <p><strong>Amphibious:</strong> {amphibious}</p>
        </aside>
      </div>
      <div className={styles.stats}>
        <StatBar label="Top Speed" value={topSpeed} max={200} />
        <StatBar label="Boosting" value={boost} max={200} />
        <StatBar label="Acceleration" value={acc} max={10} />
        <StatBar label="Health" value={health} max={300} />
      </div>
    </div>
  );
};

export default Vehicle;