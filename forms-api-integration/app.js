// Build UI which has username and password 
// make a dummy API which accepts them and returns username
// custom hooks
// how to handle loading, error, success states of API


function App() {
    //Store what the user types (state)
    // we will keep username and password in React state and wire the inputs
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        console.log(username, password);
    }

    return (
        <div>
            <h1>Forms and API Integration</h1>

            <div className="container">
                <p style={{color: "black"}}>Username: </p>
                <input 
                    type="text" 
                    placeholder="Enter your username" 
                    onChange={handleUsernameChange}>
                </input>
                
                <p style={{color: "black"}}>Password: </p>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    onChange={handlePasswordChange} >
                </input>
                
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App/>, rootElement);