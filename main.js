const arenas = document.querySelector('.arenas');
const fightButton = document.querySelector('.button');

const form = document.querySelector('form.control');
const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};
const ATTACK = ['head', 'body', 'foot'];

function enemyAttack() {
  let hit = ATTACK[getRandom(2)];
  let defence = ATTACK[getRandom(2)];
  return {
    value: HIT[hit],
    hit,
    defence,
  };
}

const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['kunai', 'sword', 'fire'],
  attack,
  changeHP,
  elHP,
  renderHP,
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['sword', 'axe', 'ice'],
  attack: console.log('Sub-Zero' + ' Fight...'),
  changeHP,
  elHP,
  renderHP,
};

function attack() {
  console.log(this.name + ' ' + 'Fight...');
}


function createElement(tag, className) {
  const elem = document.createElement(tag);
  if (className) {
    elem.classList.add(className);
  }

  return elem;
}

function createPlayer(player) {
  const players = createElement('div', 'player' + player.player);
  const progressbar = createElement('div', 'progressbar');
  const character = createElement('div', 'character');
  const life = createElement('div', 'life');
  const name = createElement('div', 'name');
  const img = createElement('img');

  players.appendChild(progressbar);
  players.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);


  life.style.width = player.hp + '%';
  name.innerText = player.name;
  img.src = player.img;

  return players;
}


function changeHP(hit) {
  if (this.hp >= 1) {
    this.hp -= hit;
  }

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

function elHP() {
  return document.querySelector('.player'+ this.player +' .life');
}

function renderHP() {
  this.elHP().style.width = this.hp + '%';
}

function playerWins(name) {
  const loseTitle = createElement('div', 'winsTitle');
  if (name) {
    loseTitle.innerText = name + ' wins';
  } else {
    loseTitle.innerText = 'draw';
  }

  return loseTitle;
}

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}


function createReloadButtom() {
  const reloadButtonDiv = createElement('div', 'reloadWrap');
  const reloadButton = createElement('button', 'button');
  reloadButton.innerText = 'Restart';

  reloadButton.addEventListener('click', function() {
    window.location.reload();
  });

  reloadButtonDiv.appendChild(reloadButton);
  arenas.appendChild(reloadButtonDiv);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let myAttack ={};

  for (let i = 0; i < form.length; i++) {
    let item = form[i];

    if (item.checked === true && item.name === 'hit') {
      myAttack[item.name] = item.value;
      myAttack.value = HIT[item.value];
    } else if (item.checked === true && item.name === 'defence') {
      myAttack[item.name] = item.value;
    }
  }

  let botAttack = enemyAttack();

  function changeAndRenderHP(player, attack) {
    player.changeHP(attack.value);
    player.renderHP();
  }
  



  if (botAttack.hit === myAttack.defence) {
    console.log('myDefence');
    changeAndRenderHP(player2, myAttack);


/*     player2.changeHP(myAttack.value);
    player2.renderHP(); */
  } else if (myAttack.hit === botAttack.defence) {
    console.log('botDefence');
    changeAndRenderHP(player1, botAttack);
/*     player1.changeHP(botAttack.value);
    player1.renderHP(); */
  } else {
    changeAndRenderHP(player2, myAttack);

    changeAndRenderHP(player1, botAttack);
/*     player1.changeHP(botAttack.value);
    player1.renderHP();

    player2.changeHP(myAttack.value);
    player2.renderHP(); */

    console.log(botAttack.value);
    console.log(myAttack.value);


  }

  if (player1.hp === 0 || player2.hp === 0) {
    fightButton.disabled = true;

    createReloadButtom();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    arenas.appendChild(playerWins(player2.name));
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    arenas.appendChild(playerWins(player1.name));
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    arenas.appendChild(playerWins());
  }

});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

