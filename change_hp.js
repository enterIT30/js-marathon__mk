/** Уменьшает HP
 * @param {number} hit 
 */
 function changeHP(hit) { //! Почему (damage)
  if (this.hp >= 1) {
    this.hp -= hit;
  }

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

/** Возвращает HTMLElement шкалы жизни
 * @returns {Element}
 */
 function elHP() {
  return document.querySelector(`.player${this.player} .life`);
}

/** Изменяет шкалу жизни (elHP), относительно результата changeHP
 */
function renderHP() {
  this.elHP().style.width = this.hp + '%';
}

function changeAndRenderHP(player, attack) {
  player.changeHP(attack.value);
  player.renderHP();
}

export {changeHP, elHP, renderHP, changeAndRenderHP};