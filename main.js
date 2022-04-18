import {player1, player2} from './players.js';
import {makeMove, showResult} from './logic.js';
import {generateLogs} from './generate_logs.js';
import {createPlayer} from './create.js';


const arenas = document.querySelector('.arenas');
const form = document.querySelector('.control');

let init = () => {

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    makeMove();
    showResult();
  });

  arenas.appendChild(createPlayer(player1));
  arenas.appendChild(createPlayer(player2));

  generateLogs('start', player1, player2);
};

init();

export {form, arenas};



