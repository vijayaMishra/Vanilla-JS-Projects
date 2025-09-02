
const bhajanList = [
    {name: "Hey Gopinath"},
    {name: "Bhajahu re mana"},
    {name: "Hari Hari Bifale"},
    {name: "Hari Sundar Nanda"},
    {name: "Gauranga Karuna Koro"},
    {name: "Bado Kripa Koile Krishna"},
    {name: "Mama mana mandire"},
    {name: "O Palanhare"},
    {name: "Humare Sath Sri Raghunath"},
    {name: "Ram ko dekh kar Sri Janaknandini"},
    {name: "Yamuna Kinare Mero Gav"},
    {name: "Krishna Jinka Naam hai"},
    {name: "Jay Radha Madhava"},
    {name:"Ekona Bhujina Prabhu"},
    {name: "Je anilo prem dhana"},
    {name: "Amar Jeevan Sada Paperat"},
    {name: "Sita Ram Sita Ram Sita Ram Kahiye"},
    {name: "Unki Karuna Me Koi Kami Hai Nahi"},
    {name: "Jaha le chaloge waha mai Chalunga"},
    {name: "Humare Sath Sri Raghunath"}
];

function App() {
    const [userInput,setUserInput] = React.useState("");
    console.log("userInput in <App />: ", userInput);
   
    const bhajanListToShow = bhajanList.filter(function ifUserInputExistsInBhajanList(bhajan) {
        if(bhajan.name.includes(userInput)) return true 
        else {
            return false;
        }
    })
    console.log("bhajanListToShow", bhajanListToShow);

    function renderBhajanList() {
        let bhajan = ["Jaya Radha madhava", "Jaya Jagannatha"];
        return [ <p>{bhajan[0]}</p>,
               <p>{bhajan[1]}</p>
        ]; 

        
        // (
        //     bhajanListToShow.map(function getValues(bhajan) {
        //         return <p key={bhajan.name}>{bhajan.name}</p>
        //     })
        // )
    }
    
    function handleChange(event) {
        setUserInput(event.target.value);
        console.log("userInput in handleChange (): ", userInput);
    }

    return (
        <div className="container">
            <p className="heading">Heartstrings Echoes</p>
            <p className="subtitle1">Melodies from the Heart | Bhakti</p>   
            <img src="Images/pinkflowerswindow.jpg" alt="window view" width="300" />
            <div className="searchParent">
                <input onChange={handleChange} type="text" name="" className="searchInput" placeholder="Search here"/>
            </div>
            <ul id="resultsContainer"></ul>
            {renderBhajanList().length === 0 
                ? <div className="noResultsFound">No results found</div> 
                : renderBhajanList()}
            <img src="Images/boatgreenimage.jpg" alt="green image girl" />
        </div>
    )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);

