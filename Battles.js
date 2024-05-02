// Функція для створення випадкових бойових гравців
function createRandomPlayer() {
  return {
    name: 'Player' + Math.floor(Math.random() * 1000), // генерація випадкового імені
    trophies: Math.floor(Math.random() * 500), // генерація випадкової кількості трофеїв
    brawler: 'Random Brawler' // призначення випадкового бравлера
  };
}

// Функція для початку бою між двома гравцями
function startBattle(player1, player2) {
  console.log(`Бій між ${player1.name} (${player1.brawler}) та ${player2.name} (${player2.brawler}) почався!`);
  
  // Моделювання бою (наприклад, можна порівняти кількість трофеїв гравців)
  if (player1.trophies > player2.trophies) {
    console.log(`${player1.name} переміг!`);
  } else if (player1.trophies < player2.trophies) {
    console.log(`${player2.name} переміг!`);
  } else {
    console.log('Нічия!');
  }
}

// Приклад використання:
const playerA = createRandomPlayer();
const playerB = createRandomPlayer();

startBattle(playerA, playerB);