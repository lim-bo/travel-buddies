import { createCard, tempCards } from "./script/card.js";
import { initLevelValues } from "./script/slider.js";

const cardsList = document.querySelector(".people");
const filterTransportButtons = document.querySelectorAll(".people-filter__transport-item");

tempCards.forEach((card) => {
    cardsList.append(createCard(card));
});

filterTransportButtons.forEach((button) => {
    button.addEventListener("click", (evt) => {
        evt.target.classList.toggle("transport-enabled");
    });
})

initLevelValues();
