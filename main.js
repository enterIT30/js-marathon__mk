const arenas = document.querySelector('.arenas');
const fightButton = document.querySelector('.button');
const form = document.querySelector('.control');
const chat = document.querySelector('.chat');


const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};
const ATTACK = ['head', 'body', 'foot'];
const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
      'Результат удара [playerWins]: [playerLose] - труп',
      '[playerLose] погиб от удара бойца [playerWins]',
      'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
      '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
      '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
      '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
      '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
      '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
      '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
      '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
      '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
      '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
      '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
      '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
      '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
      '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
      '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
      '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
      '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
      '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
      '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
      '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};

const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['kunai', 'sword', 'fire'],
  attack,
  changeHP,
  elHP,
  renderHP,
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['sword', 'axe', 'ice'],
  attack: console.log('Sub-Zero' + ' Fight...'),
  changeHP,
  elHP,
  renderHP,
};

function attack() {
  console.log(this.name + ' ' + 'Fight...');
}

function createElement(tag, className) {
  const elem = document.createElement(tag);
  if (className) {
    elem.classList.add(className);
  }

  return elem;
}

function createPlayer(player) {
  const players = createElement('div', 'player' + player.player);
  const progressbar = createElement('div', 'progressbar');
  const character = createElement('div', 'character');
  const life = createElement('div', 'life');
  const name = createElement('div', 'name');
  const img = createElement('img');

  players.appendChild(progressbar);
  players.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);


  life.style.width = player.hp + '%';
  name.innerText = player.name;
  img.src = player.img;

  return players;
}

/** Уменьшает HP
 * @param {number} hit 
 */
function changeHP(hit) {
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
function elHP() {
  return document.querySelector('.player'+ this.player +' .life');
}

function renderHP() {
  this.elHP().style.width = this.hp + '%';
}

function playerWins(name) {
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
function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

/**Функция создаёт элемент
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement}
 */
function createReloadButtom() {
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

function playerAttack() {
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

function changeAndRenderHP(player, attack) {
  player.changeHP(attack.value);
  player.renderHP();
}

function showResult() {
  if (player1.hp === 0 || player2.hp === 0) {
    fightButton.disabled = true;
    createReloadButtom();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    arenas.appendChild(playerWins(player2.name));
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    arenas.appendChild(playerWins(player1.name));
    generateLogs('end', player1, player2);
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    arenas.appendChild(playerWins());
    generateLogs('draw');
  }
}

function myFormatDate() {
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
let timeDate = myFormatDate();

generateLogs('start', player1, player2);

function generateLogs(type, playerHit, playerDef, hit, def) {
  let typeLogs = type;

  switch (typeLogs) {
    case 'hit':
    case 'defence':
      const text = logs[type][getRandom(type.length - 1)].replace('[playerDefence]', playerDef.name).replace('[playerKick]', playerHit.name);
      let chatText = `<p>${timeDate} ${text}
      ${playerDef.name} [HIT - ${hit}] [DAMAGE - ${def}]  [HP ${playerDef.hp}/100]</p>`;
      chat.insertAdjacentHTML('afterbegin', chatText);
      break;
    case 'start':
      let textStart = logs.start.replace('[time]', timeDate).replace('[player1]', playerHit.name).replace('[player2]', playerDef.name);
      let startTextEl = `<p>${textStart}</p>`;
      chat.insertAdjacentHTML('afterbegin', startTextEl);
      break;
    case 'end':
      const textEnd = logs.end[getRandom(logs.end.length - 1)].replace('[playerWins]', playerHit.name).replace('[playerLose]', playerDef.name);
      let endTextEl = `<p>${textEnd}</p>`;
      chat.insertAdjacentHTML('afterbegin', endTextEl);
      break;
    case 'draw':
      const textDraw = logs.draw;
      const drawTextEl = `<p>${textDraw}</p>`;
      chat.insertAdjacentHTML('afterbegin', drawTextEl);
  }
}


form.addEventListener('submit', function(e) {
  e.preventDefault();

  let botAttack = enemyAttack();
  let myAttack = playerAttack();

  if (botAttack.hit === myAttack.defence) {
    generateLogs('defence', player2, player1, myAttack.value, 0);
    console.log(myAttack.value);
    changeAndRenderHP(player2, myAttack);
  } else if (myAttack.hit === botAttack.defence) {
    generateLogs('defence', player1, player2, botAttack.value, 0);
    console.log(botAttack.value);
    changeAndRenderHP(player1, botAttack);
  } else {
    changeAndRenderHP(player2, myAttack);
    changeAndRenderHP(player1, botAttack);

    console.log(myAttack.value);
    console.log(botAttack.value);

    generateLogs('hit', player2, player1, myAttack.value, botAttack.value);
    generateLogs('hit', player1, player2, botAttack.value, myAttack.value);
  }

  showResult();
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

