    // const bhajanList = [
    //     "Hey Gopinath",
    //     "Amar Jeevan",
    //     "Raghupati Raghav Raja Ram",
    //     "Unki Karuna mein"
    // ];
    // console.log("Len: ",bhajanList.length);

    function getInitialBhajanList() {
        const bhajanStoredInLocalStorage = localStorage.getItem("bhajanListLocalStorage");
        let parsedBhajansStoredInLocalStorage = [];
        console.log("bhajanStoredInLocalStorage:", bhajanStoredInLocalStorage);
        console.log("typeof(bhajanStoredInLocalStorage) = ", typeof(bhajanStoredInLocalStorage));
        
        if(bhajanStoredInLocalStorage) {
            parsedBhajansStoredInLocalStorage = JSON.parse(bhajanStoredInLocalStorage);
        }
        return parsedBhajansStoredInLocalStorage;
       
        //  else {
        //         return [
        //         "Hum Ram ke aur Ram Ji Humare Hai",
        //         "Humare Sath Sri Raghunath To Kis Baat ki Chinta",
        //         "Unki Karuna mein Koi Kami Hai Nahi",
        //         "Jaha Nath Rakh doge Wahi Mai Rahunga"
        //     ];
        // }
    }

    function App() {
        console.log("Inside App component");
        const [bhajanList, setBhajanList] = React.useState(getInitialBhajanList());
        console.log("bhajanList: ", bhajanList);
        console.log("Bhajan List length: ", bhajanList.length);
        
        const [userInput, setUserInput] = React.useState("");
        console.log("userInput in App component: ", userInput);

        React.useEffect(() => {
            console.log("Inside useEffect");
            console.log("bhajanList inside useEffect: ", bhajanList);
            localStorage.setItem("bhajanListLocalStorage", JSON.stringify(bhajanList));
            
        }, [bhajanList]);
        //Step 1 & Step 4: Showing bhajans (Filtered)
        function renderBhajanList() {
            console.log("Inside renderBhajanList");
            let filtered = filterLogic();
            let bhajanListToShow = [];
            for(let i = 0; i<filtered.length; i++) {
                bhajanListToShow.push(<p key={filtered[i]}>{filtered[i]}</p>);
            }
            console.log("UI is painted," )
            return bhajanListToShow;
        }

        //Step 2 : update search input
        function onChangeHandler(event) {
            console.log("Inside on change fn of search input.")
            setUserInput(event.target.value);

            console.log("userInput in search input: ", event.target.value);
        }

        //Step 3 : Filtering Logic, filter songs in the list which user typed
        function filterLogic() {
            console.log("Inside Filter logic.")
            let filteredBhajanList = [];
            for(let i=0; i<bhajanList.length; i++) {
                //When userInput = "" → filterLogic() returns all songs.
                // When userInput = "Hey" → filterLogic() returns only songs with "Hey".
                // When userInput = "Ram" → returns only songs with "Ram".
                console.log("userInput in filterLogic: ", userInput);
                console.log("When index is ", i, "name of bhajan is: ", bhajanList[i]);
                if(bhajanList[i].toLowerCase().includes(userInput.toLowerCase())) {
                    filteredBhajanList.push(bhajanList[i]);
                } 
            }
            console.log("returning filteredBhajanList[]: ", filteredBhajanList);
            return filteredBhajanList;
        }

        //Step 4: update new song input
        const [newSong, setNewSong] = React.useState("");
        console.log("newSong: ", newSong);

        function onNewBhajanChange(event) {
            console.log("Inside on change fn of Add New Bhajan input.");
            setNewSong(event.target.value);
            console.log("Input typed by user in Add New Song input: ", event.target.value);
        }
        function addSong() {
            console.log("Inside Add Song fn");
            console.log("newSong in addSong(): ", newSong);
            if(newSong !== "") {
                console.log("If new song is not empty, updating bhajanList via setBhajanList fn");
                setBhajanList([...bhajanList, newSong]);
                console.log("bhajanList inside addSong(): ");
                setNewSong(""); //clear the input
            }
        }
        console.log("Rendering JSX component now, below -> ");
        return (
            <div className="container">
                <h1 className="heading">Sacredly Free</h1>
                <p className="subtitle1">Prayers of the Heart | Unto the Lotus Feet</p>
                <input id="searchInput" placeholder="Search here" type="text" className="searchInput" onChange={onChangeHandler}></input>
                {renderBhajanList()}
                <div>
                    <input type="text" placeholder="Add Bhajan name" className="addNewBhajanInputBox" onChange={onNewBhajanChange} value={newSong}></input> 
                    <button onClick={addSong} className="addBhajanBtn">Add Bhajan</button>
                </div>
            </div>
        )
    }

    const rootElement = document.querySelector("#root");
    ReactDOM.render(<App />, rootElement);
