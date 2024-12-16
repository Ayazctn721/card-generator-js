window.onload = function () {
    const suits = ["♥", "♦", "♠", "♣"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  
    //! selects a random element
    function randomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

function changeCard() {
  
    //! pick a random card 
    const randomValue = randomElement(values);
    const randomSuit = randomElement(suits);
  
    //! choose HTML elements
    const cardTopElement = document.querySelector(".card.card-top");
    const cardBottomElement = document.querySelector(".card.card-bottom");
    const suitElement = document.querySelector(".suit");
    const buttonElement = document.querySelector("#btn");
  
    //! set card values
    cardTopElement.innerText = randomValue;
    cardBottomElement.innerText = randomValue;
    suitElement.innerText = randomSuit;

    //! colors
    if (randomSuit === "♥" || randomSuit === "♦") {
      cardTopElement.style.color = "red";
      cardBottomElement.style.color = "red";
      suitElement.style.color = "red";
      buttonElement.style.color = "red";
      buttonElement.style.borderColor = "red";
    } else {
      cardTopElement.style.color = "black";
      cardBottomElement.style.color = "black";
      suitElement.style.color = "black";
      buttonElement.style.color = "black";
      buttonElement.style.borderColor = "black";
    }
};

changeCard();

    //! change card with button
    const buttonElement = document.querySelector("#btn");
    buttonElement.addEventListener("click", changeCard);
  };