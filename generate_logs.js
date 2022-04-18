import {LOGS} from './logs.js';
import {getRandom} from './random.js';
import {getTime} from './date.js';


const chat = document.querySelector('.chat');

let getTextLog = (type, playerName1, playerName2) => {
  switch (type) {
    case 'start':
      return LOGS[type]
        .replace('[player1]', playerName1)
        .replace('[player2]', playerName2)
        .replace('[time]', getTime());
     // break;
     case 'end':
      return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
      .replace('[playerWins]', playerName1)
      .replace('[playerLose]', playerName2);
    case 'hit':
    case 'defence':
      return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
      .replace('[playerDefence]', playerName1)
      .replace('[playerKick]', playerName2);
      //break;
    case 'draw':
      return LOGS[type];
      //break;
  }
};

function generateLogs(type, player1, player2, valueAttack) { //? (type, player1 = {}, player2 = {}, valueAttack)
  let text = getTextLog(type, player1.name, player2.name);
  switch (type) {
    case 'hit':
      text = `${getTime()} ${text} - ${valueAttack} [${player2.hp}/100]`;
      break;
    case 'defence':
    case 'end':
    case 'draw':
      text = `${getTime()} ${text}`;
      break;
  }

  const el = `<p>${text}</p>`;
  chat.insertAdjacentHTML('afterbegin', el);
}

export {generateLogs};