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
    {name: "Hey Gopinath"},
    {name: "Bhajahu re mana"},
    {name: "Hari Hari Bifale"},
    {name: "Hari Sundar Nanda"},
    {name: "Gauranga Karuna Koro"},
    {name: "Bado Kripa Koile Krishna"},
    {name: "Mama mana mandire"},
    
    {name: "O Palanhare"},
    {name: "Hey Gopinath"},
    {name: "Humare Sath Sri Raghunath"},
    {name: "Ram ko dekh kar Sri Janak Nandini"},
    {name: "Yamuna Kinare Mero Gav"},
    {name: "Krishna Jinka Naam hai"},
    {name: "Jay Radha Madhava"},
    {name:"Ekona Bhujina Prabhu"},
    {name: "Je anilo prem dhana"}
];
console.log(bhajanList[0].name);
console.log(bhajanList.length);

function displaySongsUI(songsArray) {
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    document.body.appendChild(containerElement);

    for(let i = 0; i < songsArray.length; i++) {
        // console.log(bhajanList[i]);
        let pElement = document.createElement("p");
        pElement.textContent = songsArray[i];
        containerElement.appendChild(pElement);
    }
}
let songsArray = [];
for(let i=0; i< bhajanList.length; i++) {
    songsArray.push(bhajanList[i].name);
}
console.log("songsArray: ", songsArray);
displaySongsUI(songsArray);

function searchSong() {
    let searchResults = [];
    const searchInputElement = document.querySelector(".searchInput");
    searchInputElement.addEventListener("change", function(event) {
        //console.log(event.target.value);
        const inputSongFromUser = event.target.value; //inputSongFromUser = "Hari"
        //Why am I using for loop? To go through the song lists (which is array) one by one and find out the 
        // if the letters typed by user matches with already present song in the array.
        
        const containerElement = document.querySelector(".container");  
        document.body.removeChild(containerElement); //all the songs are present in container class, removing the class from document.body
        searchResults = [];
        for(let i=0; i < bhajanList.length; i++) {
            if( bhajanList[i].name.toLowerCase().includes(inputSongFromUser)) {
                searchResults.push(bhajanList[i].name); // "hari hari biphale"
                console.log("inputSongFromUser: ", inputSongFromUser);
                console.log("searchResults: ", searchResults); //["hari Hari Bifhale", "Hari Sundar Nanda Mukunda"]
                console.log("bhajanList[i].name: ", bhajanList[i].name); //"Hari Sundar Nanda Mukunda"
                console.log("displaying only searched song in UI"); 
            }           
        }
        displaySongsUI(searchResults); //["Hari Sundar Nanda Mukunda", "Hari Hari Biphale"] 
        console.log(searchResults);
    });
    //console.log(searchResults);
}
searchSong();

//fix the inputSongFromUser only works when user input is in all lowercase

//searchResult = []

//i=0 bhajanList[0] has "Hey Gopinath"
//i=1 bhajanList[1] has "Bhajahu re mana"
//i=2 bhajanList[2] has "Hari Hari Biphale"

//i=3 has "Hari Hari Bifale" which contains word "inputSongFromUser"
// searchResults = ["Hari Hari Bifale"]
//UI => all elements are removed from UI




//i=0; i<16; line no. 48
//i = 0 displaySongsUI("Hey Gopinath") line#49

//line#35 displaySongsUI("Hey Gopinath")
//containerElement (new div created, class added to it and appended to documentbody)
//line#40 