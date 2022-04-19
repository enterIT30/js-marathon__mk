import {getRandom} from './utils/index.js';
import {HIT, ATTACK} from './constants/index.js';

import {form} from './main.js';

/** Атака противника (бота)
 * @returns {{hit: (string), defence: (string),value: number}}
 */
 function enemyAttack() {

  let length = ATTACK.length;
  let hit = ATTACK[getRandom(length) - 1];
  let defence = ATTACK[getRandom(length) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

/** Атака игрока
 * @returns {{hit: (string), defence: (string),value: number}}
 */
function playerAttack() {
  let attack ={};

  for (let item of form) {
    if (item.checked && item.name === 'hit') {
      attack[item.name] = item.value;
      attack.value = getRandom(HIT[item.value]);
    } else if (item.checked && item.name === 'defence') {
      attack[item.name] = item.value;
    }
    item.checked = false;
  }

  return attack;
}

export {enemyAttack, playerAttack};