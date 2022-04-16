/** Уменьшает HP
 * @param {number} hit 
 */
export function changeHP(hit) {
  if (this.hp >= 1) {
    this.hp -= hit;
  }

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

export function renderHP() {
  this.elHP().style.width = this.hp + '%';
}