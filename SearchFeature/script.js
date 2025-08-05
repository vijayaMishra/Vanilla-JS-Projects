//1. create ui which will render list of bhajan names,
//bhajanNames data will be array of songs(strings)

// 3. add onchange eventlistener 
// and then from your bhajanList array, filter out songs having text 
// you will get from e.target.value 4.Rerender whole UI with new array

// while rendering create a function renderBhajans(willacceptarrayofsongs)
// initially it will be renderBhajans(bhajanNames)
// then in your onchange delete whole bhajans container/div
// and again call same function renderBhajans with(filteredBhajans)
let bhajanList = [
    "Hey Gopinath",
    "Bhajahu re mana",
    "Gauranga Karuna Koro",
    "Bado Kripa Koile Krishna",
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

function displaySongsUI(bhajanList) {
    console.log(bhajanList);
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    document.body.appendChild(containerElement);

    for(let i = 0; i < bhajanList.length; i++) {
        console.log(bhajanList[i]);
        let pElement = document.createElement("p");
        pElement.textContent = bhajanList[i];
        containerElement.appendChild(pElement);
    }
}
displaySongsUI(bhajanList);

function searchSong() {
    let searchResults = [];
    const searchInputElement = document.querySelector(".searchInput");
    searchInputElement.addEventListener("change", function(event) {
        //console.log(event.target.value);
        const inputSongFromUser = event.target.value;
        for(let i=0; i < bhajanList.length; i++) {
            //console.log(bhajanList[i]);
            const containerElement = document.querySelector(".container");
            if( bhajanList[i].toLowerCase().includes(inputSongFromUser)) {
                searchResults.push(inputSongFromUser);
                document.body.removeChild(containerElement);
                console.log(bhajanList[i]);
                console.log("searchresults:", searchResults);
                displaySongsUI([bhajanList[i]]);
                console.log("displaying only searched song in UI");
                // console.log(event);
            }
        }    
        console.log(searchResults);
    });
    //console.log(searchResults);
}

searchSong();
