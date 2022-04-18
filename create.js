import {arenas} from './main.js';
import {createElement} from '/utils/index.js';




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

  export {createReloadButtom, playerWins};