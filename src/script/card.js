const personCardTemplate = document.getElementById("person-card-template").content.querySelector(".person-item");
const personCountryItemTemplate =document.getElementById("person-card-country-template").content.querySelector(".person-card__countries-item");


export const createCard = (card) => {
    const cardElement = personCardTemplate.cloneNode(true);

    const nameElements = cardElement.querySelectorAll(".person-card__name");
    nameElements.forEach((el) => {
        el.textContent = card.name;
    })
    
    const imageElement = cardElement.querySelector(".person-card__image");
    imageElement.src = card.profileImage;
    imageElement.alt = `Фото пользователя ${card.name}`;

    const hashtagsElements = cardElement.querySelectorAll(".person-card__hashtags");
    const hashtagsString = card.hashtags.join(" ");
    hashtagsElements.forEach((el) => {
        el.textContent = hashtagsString;
    });

    const countriesList = cardElement.querySelector(".person-card__countries");
    card.countries.forEach((c) => {
        const countryElement = personCountryItemTemplate.cloneNode(true);
        const image = countryElement.querySelector(".person-card__country-img");
        image.src = c.icon;
        image.alt = `Иконка страны ${c.name}`;
        countryElement.querySelector(".person-card__country-name").textContent = c.name;
        countriesList.append(countryElement);
    });

    const likesCountElements = cardElement.querySelectorAll(".person-card__likes");
    const likesCount = `${card.likes.count} ${card.likes.measure || ""}`;
    likesCountElements.forEach((el) => {
        el.textContent = likesCount;
    });

    Object.entries(card.transport).forEach(([ k ]) => {
        cardElement.querySelector(`.${k}-icon`).classList.add("icon-enabled");
    });

    cardElement.querySelector(".person-card__level").setAttribute("style", `--level: ${card.level}`);
    cardElement.querySelector(".person-card__level-value").textContent = card.level;
    
    cardElement.style.setProperty("--mark-color", card.markColor);
    return cardElement;
};

export const tempCards = [
    {
        name: "Таня Фирсова",
        profileImage: "./src/assets/people/firsova.png",
        hashtags: ["#ЗОЖ", "#ПП", "#Фитнес", "#пляж", "#авокадо", "#смузи"],
        countries: [
            {
                name: "Шри-ланка",
                icon: "./src/assets/countries/shrilanka.png"
            },
            {
                name: "Таиланд",
                icon: "./src/assets/countries/thailand.png"
            },
            {
                name: "Сейшелы",
                icon: "./src/assets/countries/seychelles.png"
            }
        ],
        likes: {
            count: 1.5,
            measure: "M"
        },
        level: 99,
        transport: {
            plane: true
        },
        markColor: "#f97676"
    },
    {
        name: "Петя Демин",
        profileImage: "./src/assets/people/demin.png",
        hashtags: ["#бургер", "#бар", "#футбол", "#концерт", "#крафт"],
        countries: [
            {
                name: "Бельгия",
                icon: "./src/assets/countries/belgium.png"
            },
            {
                name: "Чехия",
                icon: "./src/assets/countries/czech.png"
            }
        ],
        likes: {
            count: 1500
        },
        level: 80,
        transport: {
            plane: true,
            bus: true,
            run: true
        },
        markColor: "#f97676"
    },
    {
        name: "Марк Смолов",
        profileImage: "./src/assets/people/smolov.png",
        hashtags: ["#рэп", "#тату", "#хайпбист", "#кроссовки", "#суприм"],
        countries: [
            {
                name: "США",
                icon: "./src/assets/countries/usa.png"
            },
            {
                name: "Австралия",
                icon: "./src/assets/countries/australia.png"
            },
            {
                name: "Доминика",
                icon: "./src/assets/countries/dominika.png"
            }
        ],
        likes: {
            count: 170
        },
        level: 25,
        transport: {
            plane: true,
            bicycle: true
        },
        markColor: "#f97676"
    },
    {
        name: "Лариса Роговая",
        profileImage: "./src/assets/people/rogovaya.png",
        hashtags: ["#образование", "#карьера", "#учеба", "#линкедин"],
        countries: [
            {
                name: "Великобритания",
                icon: "./src/assets/countries/uk.png"
            },
            {
                name: "Германия",
                icon: "./src/assets/countries/germany.png"
            }
        ],
        likes: {
            count: 23
        },
        level: 50,
        transport: {
            plane: true,
            bus: true
        },
        markColor: "#81e31e"
    }
];