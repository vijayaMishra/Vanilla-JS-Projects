const bhajanList = [
    "Hey Gopinath",
    "Amar Jeevan",
    "Raghupati Raghav Raja Ram",
    "Unki Karuna mein"
];
console.log("lEN: ",bhajanList.length);

function App() {
    function renderBhajanList() {
        let bhajanListToShow = [];
        for(let i = 0; i<bhajanList.length; i++) {
            bhajanListToShow.push(<p>{bhajanList[i]}</p>);
        }
        return bhajanListToShow;
    }

    return (
        <div className="container">
            <h1 className="heading">Sacredly Free</h1>
            <p className="subtitle1">Prayers of the Heart | Unto the Lotus Feet</p>
            <input placeholder="Search here" type="text" className="searchInput"></input>
            {renderBhajanList()}
        </div>
    )
}
const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
