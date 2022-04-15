export function attack() {
  console.log(this.name + ' ' + 'Fight...');
}

export function createElement(tag, className) {
  const elem = document.createElement(tag);
  if (className) {
    elem.classList.add(className);
  }

  return elem;
}



/** Уменьшает HP
 * @param {number} hit 
 */
export function changeHP(hit) {
  if (this.hp >= 1) {
    this.hp -= hit;
  }

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

/** Возвращает HTMLElement
 * 
 * @returns {Element}
 */
export function elHP() {
  return document.querySelector('.player'+ this.player +' .life');
}

export function renderHP() {
  this.elHP().style.width = this.hp + '%';
}

export function playerWins(name) {
  const loseTitle = createElement('div', 'winsTitle');
  if (name) {
    loseTitle.innerText = name + ' wins';
  } else {
    loseTitle.innerText = 'draw';
  }

  return loseTitle;
}


/**Генератор случайных числе
 * @param {number} num
 * @returns {number}
 */
export function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

/**Функция создаёт элемент
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement}
 */
export function createReloadButtom() {
  const reloadButtonDiv = createElement('div', 'reloadWrap');
  const reloadButton = createElement('button', 'button');
  reloadButton.innerText = 'Restart';

  reloadButton.addEventListener('click', function() {
    window.location.reload();
  });

  reloadButtonDiv.appendChild(reloadButton);
  arenas.appendChild(reloadButtonDiv);
}

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

export function changeAndRenderHP(player, attack) {
  player.changeHP(attack.value);
  player.renderHP();
}



export function myFormatDate() {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = date.getDate();
  if (day < 10) {
    date = `0${day}`;
  }

  let month = date.getMonth();
  if (month < 10) {
    month = `0${month}`;
  }

  let year = date.getFullYear();

  return `${hours}:${minutes} ${day}.${month}.${year}`;
}
