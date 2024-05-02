// Приклад простого автооновлення магазину для Brawl Stars на чистому JavaScript

class Item {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

let items = [
  new Item("Power Points", 100, "Upgrade your brawler's power"),
  new Item("Coins", 50, "Currency for buying in-game items"),
  new Item("Tickets", 200, "Use them to play special events"),
];

function displayShop() {
  console.log("Welcome to Brawl Stars Shop!\n");

  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - ${item.price} coins - ${item.description}`);
  });
}

// Функція для автооновлення магазину
function autoUpdateShop() {
  console.log("Updating shop...");

  // Симулюємо отримання нового списку предметів з сервера гри
  items = [
    new Item("Power Points", 100, "Upgrade your brawler's power"),
    new Item("Coins", 50, "Currency for buying in-game items"),
    new Item("Tickets", 200, "Use them to play special events"),
    new Item("Gems", 500, "Premium currency for special offers"),
  ];

  console.log("Shop updated!");
}

// Функція для створення таймеру автооновлення магазину
function startAutoUpdate(interval) {
  setInterval(autoUpdateShop, interval);
}

// Приклад використання
displayShop();
startAutoUpdate(60000); // Автооновлення кожну хвилину