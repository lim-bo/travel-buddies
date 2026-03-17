import { createCard, tempCards } from "./script/card";
import { initLevelValues } from "./script/slider";

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
