import {arenas} from './main.js';
import {createElement} from './utils/index.js';



let createPlayer = ({player, hp, name, img}) => {
  const players = createElement('div', `player${player}`);
  const progressbar = createElement('div', 'progressbar');
  const character = createElement('div', 'character');
  const life = createElement('div', 'life');
  const namePlayer = createElement('div', 'name');
  const imgPlayer = createElement('img');

  players.appendChild(progressbar);
  players.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(namePlayer);
  character.appendChild(imgPlayer);


  life.style.width = hp + '%';
  namePlayer.innerText = name;
  imgPlayer.src = img;

  return players;
};




/** Возвращает заголовок с результатом поединка (имя победителя или ничья)
 * @param {string} name 
 * @returns {HTNLElement}
 */
let playerWins = (name) => {
  const loseTitle = createElement('div', 'winsTitle');
  if (name) {
    loseTitle.innerText = name + ' wins';
  } else {
    loseTitle.innerText = 'draw';
  }

  return loseTitle;
};


 /**Создаёт кнопку reload
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement}
 */
  let createReloadButtom = () => {
    const reloadButtonDiv = createElement('div', 'reloadWrap');
    const reloadButton = createElement('button', 'button');

    reloadButton.innerText = 'Restart';

    reloadButton.addEventListener('click', function() {
      window.location.reload();
    });

    reloadButtonDiv.appendChild(reloadButton);
    arenas.appendChild(reloadButtonDiv);
  };

  //export {createReloadButtom, playerWins};
  export {createPlayer, createReloadButtom, playerWins};