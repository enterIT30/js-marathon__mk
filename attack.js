/**
 
 * @returns {{hit: (string), defence: (string),value: number}}
 */
export function enemyAttack() {
  let length = ATTACK.length;
  let hit = ATTACK[getRandom(length) - 1];
  let defence = ATTACK[getRandom(length) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

export function playerAttack() {
  let attack ={};

  for (let i = 0; i < form.length; i++) {
    let item = form[i];

    if (item.checked === true && item.name === 'hit') {
      attack[item.name] = item.value;
      attack.value = getRandom(HIT[item.value]);
    } else if (item.checked === true && item.name === 'defence') {
      attack[item.name] = item.value;
    }
    item.checked = false;
  }

  return attack;
}