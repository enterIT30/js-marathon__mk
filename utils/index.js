/**Генератор случайных числе
 * @param {number} num
 * @returns {number}
 */
let getRandom = (num) => num ? Math.ceil(Math.random() * num) : 20;

let getTime = () => {
  let appendZero = (time) => time < 10 ? `0${time}` : time;

  const date = new Date();

  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  //let day = date.getDate();
  //let month = date.getMonth() +1;
  //let year = date.getFullYear();

  return `${appendZero(hours)}:${appendZero(min)}:${appendZero(sec)}`;   /* ${day}.${month}.${year}*/
};

/** Создаёт HTML-элемент
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement}
 */
 let createElement = (tag, className) => {
  const elem = document.createElement(tag);
  if (className) {
    elem.classList.add(className);
  }

  return elem;
};

export {getTime, getRandom, createElement};


