import React, { useState } from 'react';
import styles from './WeaponTable.module.css';
import weaponData from '../data/weaponData';

const WeaponTable = ({ weaponType, weaponClass }) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  
  const filteredWeapons = weaponData.filter((weapon) => {
    return (weaponType && weapon.type === weaponType) || (weaponClass && weapon.class === weaponClass);
  });

  const sortedWeapons = [...filteredWeapons].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const handleSort = (alias) => {
    const key = aliasToKey[alias];
    setSortField(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Column name aliases for weapon object key names
  const aliasToKey = {
    'Weapon': 'name',
    'Cal.': 'caliber',
    'Cap.': 'capacity',
    'Fire Select': 'fireSelect',
    'Base Damage': 'damage',
    'Rate of Fire': 'rof',
    'Muzzle Vel. (m/s)': 'velocity',
    'Range (m)': 'range'
  };

  return (
    <div className={styles.container}>
    <table className={styles.table}>
      <thead>
        <tr>
          {Object.keys(aliasToKey).map((alias) => (
            <th key={alias} onClick={() => handleSort(alias)}>
              {alias}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedWeapons.map((weapon) => (
          <tr key={weapon.id}>
            <td>{weapon.name}</td>
            <td>{weapon.caliber}</td>
            <td>{weapon.capacity}</td>
            <td>{weapon.fireSelect}</td>
            <td>{weapon.damage}</td>
            <td>{weapon.rof}</td>
            <td>{weapon.velocity}</td>
            <td>{weapon.range}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default WeaponTable;