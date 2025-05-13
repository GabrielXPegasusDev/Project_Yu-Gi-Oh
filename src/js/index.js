const btnForward = document.getElementById("btn-forward");
const btnBackward = document.getElementById("btn-backward");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

cards.forEach((card) => {
  card.addEventListener("click", function () {
    toggleCardFlip(card);
    toggleDescriptionVisibility(card);
  });
});

btnForward.addEventListener("click", function () {
  if (currentCard === cards.length - 1) return;

  hideSelectedCard();

  currentCard++;
  showCard(currentCard);
});

btnBackward.addEventListener("click", function () {
  if (currentCard === 0) return;

  hideSelectedCard();

  currentCard--;
  showCard(currentCard);
});

function toggleDescriptionVisibility(card) {
  const description = card.querySelector(".description");
  description.classList.toggle("hide");
}

function toggleCardFlip(card) {
  const flippedCard = card.querySelector(".flipped-card");
  card.classList.toggle("flip");
  flippedCard.classList.toggle("show-flipped-card");
}

function showCard(currentCard) {
  cards[currentCard].classList.add("selected");
}

function hideSelectedCard() {
  const selectedCard = document.querySelector(".selected");
  selectedCard.classList.remove("selected");
}
