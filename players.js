import {changeHP, elHP, renderHP} from './change_hp.js';
import {attack} from './attack.js';


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
  attack,
  changeHP,
  elHP,
  renderHP,
};

export {player1, player2};