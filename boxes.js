// Приклад простих ящиків для Brawl Stars на чистому JavaScript

// Клас ящика
class Box {
  constructor(name, contents) {
    this.name = name;
    this.contents = contents;
  }
}

// Список доступних ящиків
let boxes = [
  new Box("Normal Box", ["Coins", "Power Points"]),
  new Box("Big Box", ["Coins", "Power Points", "Tickets"]),
  new Box("Mega Box", ["Coins", "Power Points", "Tickets", "Brawlers"])
];

// Функція для відкриття ящика
function openBox(boxIndex) {
  const selectedBox = boxes[boxIndex - 1];

  if (selectedBox) {
    console.log(`You opened ${selectedBox.name}!`);
    console.log("Contents:");
    selectedBox.contents.forEach(item => console.log(item));
  } else {
    console.log("Invalid box index.");
  }
}

// Приклад використання
openBox(2);