// Build UI which has username and password 
// make a dummy API which accepts them and returns username
// custom hooks
// how to handle loading, error, success states of API

function dummyApi(name, password) {
    
}

function App() {
    return (
        <div className="body1">
            <h1>Forms and API Integration</h1>
            <div className="container">
                <p style={{color: "black"}}>Username: </p>
                <input type="text" placeholder="Enter your username"></input>
                 <p style={{color: "black"}}>Password: </p>
                <input type="password" placeholder="Enter your password"></input>
                
                <button >Submit</button>
            </div>
        </div>
    )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App/>, rootElement);