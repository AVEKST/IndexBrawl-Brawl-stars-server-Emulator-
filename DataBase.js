const fs = require('fs');

const playersDataFile = 'playersData.json';

// Функція для збереження даних гравців
function savePlayersData(playersData) {
  const data = JSON.stringify(playersData);
  fs.writeFileSync(playersDataFile, data);
}

// Функція для отримання даних гравців
function getPlayersData() {
  try {
    const data = fs.readFileSync(playersDataFile);
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading players data:', error);
    return [];
  }
}

// Приклад використання:
const players = getPlayersData();
console.log('Завантажені гравці:', players);

// Додавання нового гравця
const newPlayer = { name: 'Player1', trophies: 500 };
players.push(newPlayer);
savePlayersData(players);
console.log('Гравці після додавання нового гравця:', players);