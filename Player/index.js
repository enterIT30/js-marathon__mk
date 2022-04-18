import {createElement} from '/utils/index.js';

class Player {
  constructor(props) {
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.player = props.player;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;
  }

  elHP = () => {
    return document.querySelector(`.${this.selector} .life`);
  }

  changeHP = (hit) => {
    this.hp -= hit;

    if (this.hp <= 0) {
      this.hp = 0;
    }
  }

  renderHP = () => {
    this.elHP().style.width = this.hp + '%';
  }


  createPlayer() {
    const player = createElement('div', this.selector);
    const progressbar = createElement('div', 'progressbar');
    const character = createElement('div', 'character');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const img = createElement('img');

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);


    life.style.width = this.hp + '%';
    name.innerText = this.name;
    img.src = this.img;

    const root = document.queryCommandValue(`.${this.rootSelector}`);
    root.appendChild(player);

    //return player;
  }
}

export default Player;