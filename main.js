import {makeMove, showResult} from './logic.js';
import {generateLogs} from './generate_logs.js';
import {createPlayer} from './create.js';



const arenas = document.querySelector('.arenas');
const form = document.querySelector('.control');

import Player from '../Player/index.js';

const player1 = new Player({
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  rootSelector: 'arenas',
});

const player2 = new Player({
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  rootSelector: 'arenas',
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  makeMove();
  showResult();
});

let init = () => {
/*   player1.createPlayer();
  player2.createPlayer(); */
  arenas.appendChild(createPlayer(player1));
  arenas.appendChild(createPlayer(player2));


  generateLogs('start', player1, player2);
};

init();

export {form, arenas, player1, player2};









