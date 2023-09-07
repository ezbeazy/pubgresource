import styles from './StatBar.module.css';

const StatBar = ({ label, value, fill = value, max }) => {
    const percentage = (fill / max) * 100;

    return (
      <div className={styles.statBarWrapper}>
        <label className={styles.statBarLabel}>{label}</label>
        <div className={styles.statBarContainer}>
          <div className={styles.statBar}>
            <div className={styles.statBarFill} style={{ width: `${percentage}%` }}>
              <span className={styles.statBarValue}>{value}</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default StatBar;
