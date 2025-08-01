//1. create ui which will render list of bhajan names,
//bhajanNames data will be array of songs(strings)

let bhajanNames = [
    "Hey Gopinath",
    "Bhajahu re mana",
    "Gauranga Karuna Koro",
    "Mama mana mandire",
    "Hari Hari Bifale",
    "Vaishnava Thakura",
    "O Palanhare",
    "Humare Sath Sri Raghunath",
    "Ram ko dekh kar Sri Janak Nandini",
    "Yamuna Kinare Mero Gav",
    "Krishna Jinka Naam hai",
    "Jay Radha Madhava"
];

const containerElement = document.createElement("div");
containerElement.classList.add("container");
document.body.appendChild(containerElement);

for(let i = 0; i < bhajanNames.length; i++) {
    let pElement = document.createElement("p");
    pElement.textContent = bhajanNames[i];
    containerElement.appendChild(pElement);
}