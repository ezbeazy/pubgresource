import styles from './StatsBar.module.css';

const StatsBar = ({ damage, dps, rof, velocity, range, stability }) => {
  return (
    <div>
      {renderStat('Damage', damage, styles.damageBar)}
      {renderStat('DPS', dps, styles.dpsBar)}
      {renderStat('ROF', rof, styles.rofBar)}
      {renderStat('Velocity', velocity, styles.velocityBar)}
      {renderStat('Range', range, styles.rangeBar)}
      {renderStat('Stability', stability, styles.stabilityBar)}
    </div>
  );
};

const renderStat = (label, value, className) => (
  <div className={styles.statsWrapper}>
    <span>{label}:</span>
    <div className={styles.barContainer}>
      <div className={className} style={{ width: `${value}%` }}>
        <span className={styles.indicator}>{value}</span>
      </div>
    </div>
  </div>
);

export default StatsBar;

