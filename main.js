const images = {
  scorpion: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  kitana: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  liukang: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
  sonya: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  subzero: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
};
// Task #1 (*)
const player1 = {
  name: "scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["sword", "leg"],
  attack() {
    console.log(`${this.name} Fight...`);
  },
};
const player2 = {
  name: "kitana",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["fan", "arm"],
  attack() {
    console.log(`${this.name} Fight...`);
  },
};
// Task #2 (*)
const createPlayerV1 = (clasName, name, health) => {
  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.innerText = health;

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = name;

  const $img = document.createElement("img");
  $img.setAttribute("src", images[name] || images["scorpion"]);

  const $character = document.createElement("div");
  $character.classList.add("character");
  $character.appendChild($img);

  const $player = document.createElement("div");
  $player.classList.add(clasName);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  document.querySelector(".arenas").appendChild($player);
};

// Task #3 (*)
const createPlayerV2 = (name, player) => {
  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.innerText = player.hp;

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = player.name;

  const $img = document.createElement("img");
  $img.setAttribute("src", player.img);

  const $character = document.createElement("div");
  $character.classList.add("character");
  $character.appendChild($img);

  const $player = document.createElement("div");
  $player.classList.add(name);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  document.querySelector(".arenas").appendChild($player);
};

// examples
// createPlayer('player2','kitana', 50)
// createPlayer('player1','scorpion', 100)

createPlayerV2("player1", player1);
createPlayerV2("player2", player2);
