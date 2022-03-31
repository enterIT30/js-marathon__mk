// Task #0

const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['kunai', 'sword', 'fire'],
  attack: console.log('Scorpion' + ' Fight...'),
};

const player2 = {
  name: 'Sub-Zero',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['sword', 'axe', 'ice'],
  attack: console.log('Sub-Zero' + ' Fight...'),
};


//Task #1,2

/* function createPlayer(playerClass, playerName, hp) {

  const arenas = document.querySelector('.arenas');

  const player = document.createElement('div');
  const progressbar = document.createElement('div');
  const character = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const img = document.createElement('img');


  player.classList.add(playerClass);
  progressbar.classList.add('progressbar');
  character.classList.add('character');
  life.classList.add('life');
  name.classList.add('name');


  arenas.appendChild(player);
  player.appendChild(progressbar);
  player.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);


  life.style.width = hp + '%';
  name.innerText = playerName;

  //const img1 = document.querySelector('.arenas .player1 .character img');
  //const img2 = document.querySelector('.arenas .player2 .character img');
  img1.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
  img2.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';



}

createPlayer('player1', 'Scorpion', 100);
createPlayer('player2', 'Sub-Zero', 50); */

// Task #3 (*)

function createPlayer(playerClass, playerNumber) {

  const arenas = document.querySelector('.arenas');

  const player = document.createElement('div');
  const progressbar = document.createElement('div');
  const character = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const img = document.createElement('img');


  player.classList.add(playerClass);
  progressbar.classList.add('progressbar');
  character.classList.add('character');
  life.classList.add('life');
  name.classList.add('name');


  arenas.appendChild(player);
  player.appendChild(progressbar);
  player.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);


  life.style.width = playerNumber.hp + '%';
  name.innerText = playerNumber.name;
  img.src = playerNumber.img;
}

createPlayer('player1', player1);
createPlayer('player2', player2);