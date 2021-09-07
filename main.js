const $randomButton = document.querySelector(".button");
const $arenas = document.querySelector(".arenas");
// Task #1 (*)
const player1 = {
  player: 1,
  name: "scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["sword", "leg"],
  attack() {
    console.log(`${this.name} Fight...`);
  },
};
const player2 = {
  player: 2,
  name: "kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["fan", "arm"],
  attack() {
    console.log(`${this.name} Fight...`);
  },
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  className && element.classList.add(className);
  return element;
};

// Task #2 (*)
const createPlayer = (player) => {
  const $player = createElement("div", `player${player.player}`);
  const $progressbar = createElement("div", "progressbar");
  const $name = createElement("div", "name");
  const $life = createElement("div", "life");
  const $img = createElement("img");
  const $character = createElement("div", "character");

  $life.style.width = player.hp + "%";

  $name.innerText = player.name;

  $img.setAttribute("src", player.img);

  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  return $player;
};

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

//changeHp func
const changeHp = (player) => {
  const $playerLife = document.querySelector(`.player${player.player} .life`);
  player.hp -= randomInt(20);
  if (player.hp <= 0) {
    player.hp = 0;
    $arenas.appendChild(playerWins(player));
    $randomButton.disabled = true;
  }
  $playerLife.style.width = player.hp + "%";
};

const playerWins = (player) => {
  let name = "";
  if ((player.player == = 1)) {
    name = player2.name;
  } else {
    name = player1.name;
  }
  asfasfasf
  const $loseTitle = createElement("div", "loseTitle");
  $loseTitle.innerText = `${name} wins`;
  return $loseTitle;
};

$randomButton.addEventListener("click", () => {
  changeHp(player1);
  changeHp(player2);
});
// examples
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
