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
        console.log("bhajanStoredInLocalStorage", bhajanStoredInLocalStorage);
        console.log("type ofbhajanStoredInLocalStorage", typeof(bhajanStoredInLocalStorage));
        
        if(bhajanStoredInLocalStorage) {
            parsedBhajansStoredInLocalStorage = JSON.parse(bhajanStoredInLocalStorage);
        }

        return parsedBhajansStoredInLocalStorage ;
        return [
            "Hey Gopinath",
            "Amar Jeevan",
            "Raghupati Raghav Raja Ram",
            "Unki Karuna mein"
        ];
    }

    function App() {

        const [bhajanList, setBhajanList] = React.useState(getInitialBhajanList());
        console.log("Bhajan List length: ", bhajanList.length);
        
        const [userInput, setUserInput] = React.useState("");
        console.log("userInput in App component: ", userInput);

        //Step 1 & Step 4: Showing bhajans (Filtered)
        function renderBhajanList() {
            let filtered = filterLogic();
            let bhajanListToShow = [];
            for(let i = 0; i<filtered.length; i++) {
                bhajanListToShow.push(<p key={filtered[i]}>{filtered[i]}</p>);
            }
            return bhajanListToShow;
        }

        //Step 2 : update search input
        function onChangeHandler(event) {
            setUserInput(event.target.value);
            console.log("userInput: ", userInput);
        }

        //Step 3 : Filtering Logic, filter songs in the list which user typed
        function filterLogic() {
            let filteredBhajanList = [];
            for(let i=0; i<bhajanList.length; i++) {
                //When userInput = "" → filterLogic() returns all songs.
                // When userInput = "Hey" → filterLogic() returns only songs with "Hey".
                // When userInput = "Ram" → returns only songs with "Ram".
                console.log("userInput: ", userInput);
                console.log("When index is ", i, "name of bhajan is: ", bhajanList[i]);
                if(bhajanList[i].toLowerCase().includes(userInput.toLowerCase())) {
                    filteredBhajanList.push(bhajanList[i]);
                } 
            }
            return filteredBhajanList;
        }

        //Step 4: update new song input
        const [newSong, setNewSong] = React.useState("");

        function onNewBhajanChange(event) {
            setNewSong(event.target.value);
        }
        function addSong() {
            if(newSong !== "") {
                setBhajanList([...bhajanList, newSong]);
                localStorage.setItem("bhajanListLocalStorage", JSON.stringify(bhajanList));
                setNewSong(""); //clear the input
            }
        }
        
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
