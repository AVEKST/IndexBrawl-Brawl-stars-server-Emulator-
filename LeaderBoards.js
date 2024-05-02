// Приклад простого лідерборду для Brawl Stars на чистому JavaScript

// Клас гравця
class Player {
  constructor(name, trophies) {
    this.name = name;
    this.trophies = trophies;
  }
}

// Список гравців (лідерборд)
let leaderboard = [
  new Player("Player1", 500),
  new Player("Player2", 600),
  new Player("Player3", 700),
  new Player("Player4", 450),
  new Player("Player5", 550)
];

// Функція для сортування гравців за трофеями у спадному порядку
function sortLeaderboard() {
  leaderboard.sort((a, b) => b.trophies - a.trophies);
}

// Функція для відображення лідерборду
function displayLeaderboard() {
  sortLeaderboard();
  console.log("Leaderboard:");

  leaderboard.forEach((player, index) => {
    console.log(`${index + 1}. ${player.name} - ${player.trophies} trophies`);
  });
}

// Функція для додавання нового гравця
function addPlayer(name, trophies) {
  leaderboard.push(new Player(name, trophies));
}

// Приклад використання
displayLeaderboard();
addPlayer("NewPlayer", 750);
console.log("\nAfter adding a new player:");
displayLeaderboard();