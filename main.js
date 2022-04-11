const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');


const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['kunai', 'sword', 'fire'],
  attack: console.log('Scorpion' + ' Fight...'),
  changeHP: changeHP,
  elHP: elHP,
  renderHP:renderHP,
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['sword', 'axe', 'ice'],
  attack: console.log('Sub-Zero' + ' Fight...'),
  changeHP: changeHP,
  elHP: elHP,
  renderHP:renderHP,
};


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

//==================================================================================


function changeHP(random) {

  //!=======================================
  console.log(this.hp);

  if (this.hp >= 1) {
    this.hp -= random;
  }

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

//? Первый вариант всё в функции elHP (закоментировать renderHP:renderHP,)

/* function elHP() {
  let life = document.querySelector('.player'+ this.player +' .life');
  life.style.width = this.hp + '%';
  return life;
}
 */
//?===========================================


//? Вторй вариант с elHP и renderHP, но с вызовом player1.renderHP(player1.elHP());

function elHP() {
  let life = document.querySelector('.player'+ this.player +' .life');
  return life;
}

function renderHP(life) {
  life.style.width = this.hp + '%';
}

//?===========================================


function playerWins(name) {
  const loseTitle = createElement('div', 'winsTitle');
  if (name) {
    loseTitle.innerText = name + ' wins';
  } else {
    loseTitle.innerText = 'draw';
  }

  return loseTitle;
}

function getRandom(number) {
  return Math.ceil(Math.random() * number);
}


function createReloadButtom() {
  const reloadWrap = createElement('div', 'reloadWrap');
  const buttonRestart = createElement('button', 'button');

  buttonRestart.innerText = 'Restart';

  reloadWrap.appendChild(buttonRestart);

  buttonRestart.addEventListener("click", function () {
    window.location.reload();
  });

  return reloadWrap;
}


randomButton.addEventListener("click", function() {
  player1.changeHP(getRandom(20));
  player2.changeHP(getRandom(20));

  //!===============================================

  player1.renderHP(player1.elHP());
  player2.renderHP(player2.elHP());

  //!===============================================

  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;
    //randomButton.style.display = 'none';
    arenas.appendChild(createReloadButtom());
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    arenas.appendChild(playerWins(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    arenas.appendChild(playerWins(player1.name));
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    arenas.appendChild(playerWins());
  }

});



arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

