// Приклад простого магазину для Brawl Stars на чистому JavaScript

// Клас предмета магазину
class Item {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

// Створення предметів магазину
const items = [
  new Item("Power Points", 100, "Upgrade your brawler's power"),
  new Item("Coins", 50, "Currency for buying in-game items"),
  new Item("Tickets", 200, "Use them to play special events"),
];

// Функція для відображення товарів у магазині
function displayShop() {
  console.log("Welcome to Brawl Stars Shop!\n");

  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - ${item.price} coins - ${item.description}`);
  });
}

// Функція для купівлі товару
function buyItem(itemIndex, coins) {
  const selectedItem = items[itemIndex - 1];

  if (selectedItem) {
    if (coins >= selectedItem.price) {
      console.log(`You bought ${selectedItem.name} for ${selectedItem.price} coins!`);
      coins -= selectedItem.price;
      console.log(`You have ${coins} coins left.`);
    } else {
      console.log("You don't have enough coins to buy this item.");
    }
  } else {
    console.log("Invalid item index.");
  }
}

// Приклад використання
let userCoins = 500;
displayShop();
buyItem(2, userCoins);