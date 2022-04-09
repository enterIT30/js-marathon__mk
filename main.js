const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');


const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['kunai', 'sword', 'fire'],
  attack: console.log('Scorpion' + ' Fight...'),
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['sword', 'axe', 'ice'],
  attack: console.log('Sub-Zero' + ' Fight...'),
};


function createElement(tag, className) {
  const elem = document.createElement(tag);
  if (className) {
    elem.classList.add(className);
  }

  return elem;
}


function createPlayer(playerNumber) {
  const player = createElement('div', 'player' + playerNumber.player);
  const progressbar = createElement('div', 'progressbar');
  const character = createElement('div', 'character');
  const life = createElement('div', 'life');
  const name = createElement('div', 'name');
  const img = createElement('img');

  player.appendChild(progressbar);
  player.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);


  life.style.width = playerNumber.hp + '%';
  name.innerText = playerNumber.name;
  img.src = playerNumber.img;

  return player;
}

function changeHP(playerNumber, playerNumber2) {
  const playerLife = document.querySelector('.player'+ playerNumber.player +' .life');
  playerNumber.hp -= Math.ceil(Math.random() * 20);
  playerLife.style.width = playerNumber.hp + '%';

  console.log(playerLife.style.width);

  if (playerNumber.hp <= 0 && playerNumber2.hp >= 1) {
    arenas.appendChild(playerWins(playerNumber.name, playerNumber2.name));
    playerLife.style.width = 0 + '%';
    randomButton.disabled = true;
    randomButton.style.display = 'none';
  }

/*   if (playerNumber.hp <= 0 && playerNumber2.hp <= 0) {
    arenas.appendChild(playerLose());
  }
 */
}


function playerLose() {
  const loseTitle = createElement('div', 'loseTitle');
  loseTitle.innerText = 'standoff';
  return loseTitle;
}

function playerWins(name, name2) {
  const winsTitle = createElement('div', 'winsTitle');
  winsTitle.innerText = name2 + ' wins';
  return winsTitle;
}



randomButton.addEventListener("click", function (e) {
  console.log('Hola');

  changeHP(player1, player2);
  changeHP(player2, player1);


});


arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));