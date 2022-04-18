import {enemyAttack, playerAttack} from './attack.js';
import {changeAndRenderHP} from './change_hp.js';
import {player1, player2} from './main.js';
import {arenas} from './main.js';
import {generateLogs} from './generate_logs.js';
import {createReloadButtom, playerWins} from './create.js';

const fightButton = document.querySelector('.control .button');

let makeMove = () => {
  let botAttack = enemyAttack();
  let myAttack = playerAttack();

/*   let {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = enemyAttack();
  let {hit, defence, value} = playerAttack();
 */
  if (myAttack.hit !== botAttack.defence) {
    changeAndRenderHP(player2, myAttack);
    generateLogs('hit', player1, player2, myAttack.value);
  } else {
    generateLogs('defence', player1, player2);
  }

  if (botAttack.hit !== myAttack.defence) {
      changeAndRenderHP(player1, botAttack);
      generateLogs('hit', player2, player1, botAttack.value);
  } else {
    generateLogs('defence', player2, player1);
  }

/*   if (defence !==  hitEnemy) {
    changeAndRenderHP(player1, valueEnemy);
    generateLogs('hit', player2, player1, valueEnemy);
  } else {
    generateLogs('defence', player2, player1);
  }
  if (defenceEnemy !== hit) {
    changeAndRenderHP(player2, value);
    generateLogs('hit', player1, player2, value);
  } else {
    generateLogs('defence', player1, player2);
  } */


};

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

export {makeMove, showResult};