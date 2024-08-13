const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const main = document.querySelector("body");
const result = document.getElementById("result");
let time = document.getElementById("tm");
const grid = document.querySelector("#grid");

let chosenCards = [];
let chosenCardIds = [];
let cardsWon = 0;
let res = 0;
let min = 2,
  sec = 30;

let start = false;
let timerInterval;

createBoard();

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    grid.appendChild(card);
  }
}

function flipcard() {
  if (!start) {
    start = true;
    timerInterval = setInterval(countdown, 1000);
  }

  const card_id = this.getAttribute("data-id");
  chosenCardIds.push(card_id);

  if (chosenCardIds[0] != chosenCardIds[1]) {
    chosenCards.push(cardArray[card_id].name);
    this.setAttribute("src", cardArray[card_id].img);
  }

  if (chosenCardIds[0] == chosenCardIds[1]) {
    chosenCardIds.pop();
  }

  if (chosenCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = chosenCardIds[0];
  const optionTwoId = chosenCardIds[1];
  if (chosenCards[0] == chosenCards[1]) {
    res += 5;
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipcard);
    cards[optionTwoId].removeEventListener("click", flipcard);
    result.innerHTML = res;
    cardsWon += 2;
  } else if (chosenCards[0] != chosenCards[1]) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }
  chosenCards = [];
  chosenCardIds = [];

  if (cardsWon == cardArray.length) {
    alert("You won!");
    reset();
  }
}

function countdown() {
  sec--;
  if (min == 0 && sec == 0) {
    alert("0 seconds left!");
    reset();
  } else if (sec == 0) {
    min--;
    sec = 60;
  }
  time.innerHTML = min + "m" + " " + sec + "s";
}

function reset() {
  grid.innerHTML = "";
  start = false;
  clearInterval(timerInterval);
  createBoard();

  cardsWon = 0;

  min = 2;
  sec = 30;
  time.innerHTML = min + "m" + " " + sec + "s";

  res = 0;
  result.innerHTML = res;
}
