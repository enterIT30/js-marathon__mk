/**Генератор случайных числе
 * @param {number} num
 * @returns {number}
 */
 let getRandom = (num) => num ? Math.ceil(Math.random() * num) : 20;

 export {getRandom};