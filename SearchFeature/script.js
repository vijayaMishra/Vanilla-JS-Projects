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
    "Hari Hari Bifale",
    "Hari Sundar Nanda",
    "Gauranga Karuna Koro",
    "Bado Kripa Koile Krishna",
    "Mama mana mandire",
    
    "O Palanhare",
    "Hey Gopinath",
    "Humare Sath Sri Raghunath",
    "Ram ko dekh kar Sri Janak Nandini",
    "Yamuna Kinare Mero Gav",
    "Krishna Jinka Naam hai",
    "Jay Radha Madhava",
    "Ekona Bhujina Prabhu",
    "Je anilo prem dhana"
];

function displaySongsUI(bhajanList) {
    console.log(bhajanList);
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    document.body.appendChild(containerElement);

    for(let i = 0; i < bhajanList.length; i++) {
        // console.log(bhajanList[i]);
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
        const inputSongFromUser = event.target.value; //inputSongFromUser = "Hari"
        //Why am I using for loop? To go through the song lists (which is array) one by one and find out the 
        // if the letters typed by user matches with aleady present song in the array.
        
         const containerElement = document.querySelector(".container");  
        //What will happen when two search results are present? Input = "hari"
        
        for(let i=0; i < bhajanList.length; i++) {

            if( bhajanList[i].toLowerCase().includes(inputSongFromUser)) {
                searchResults.push(bhajanList[i]); // "hari hari biphale",
                document.body.removeChild(containerElement); //all the songs are present in container class, removing the class from document.body
                displaySongsUI(searchResults); //["Hari Sundar Nanda Mukunda", "Hari Hari Biphale"] 
                console.log(searchResults); //["hari Hari Bifhale", "Hari Sundar Nanda Mukunda"]
                console.log(bhajanList[i]); //"Hari Sundar Nanda Mukunda"
                console.log("displaying only searched song in UI");
            }
        }   
        
        console.log(searchResults);
    });
    //console.log(searchResults);
}

searchSong();

//fix the inputSongFromUser only works when user input is in all lowercase


//seachResult = []

//i = 0 bhajanList[0] is "Hey Gopinath" and it does ont match with inputSongFromUser
//i = 1 bhajanList[1] is "Bhajahu re mana", and it does not match with inputSongFromUser
//i = 2 bhajanList[2] is "Hari Hari Biphale", it matches with inputSongFromUser i.e., "hari"
//current state of UI => [All songs are listed in the UI]

//enters inside if block
// searchResult = ["Hari Hari Biphale"]
// UI => No song in UI
// bhajanList[i] = "Hari Hari Biphale"
// displaySongsUI(["Hari Hari Biphale"])

// i = 3 bhajanList[3] is "Hari Sundar Nanda", it matches with inputSongFromUser i.e., "hari"
//current state of UI => 