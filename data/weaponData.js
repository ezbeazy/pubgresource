import weaponJson from './weapon.json';
import meleeJson from './melee.json';
import throwableJson from './throwable.json';

const weaponData = [...weaponJson, ...meleeJson, ...throwableJson];

export default weaponData;