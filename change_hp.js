function changeAndRenderHP(player, attack) {
  player.changeHP(attack.value);
  player.renderHP();
}

export {changeAndRenderHP};