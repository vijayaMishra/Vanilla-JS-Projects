
function App() {

    const [count, setCount] = React.useState();

    function handleIncrement() {
        setCount(count+1);
        console.log("Increment button clicked");
    }

    function handleDecrement() {
        setCount(count - 1);
        console.log("Decrement button clicked");
    }

    function handleReset() {
        setCount(0);
        console.log("Reset button clicked");
    }

    return (
        <div className="container">
            <h1 className="heading">Counter React App</h1>
            <h1 className="counter">0</h1>
            <button className="increment" onClick={ handleIncrement }>Increment</button>
            <button className="decrement" onClick={ handleDecrement }>Decrement</button>
            <button className="reset" onClick={ handleReset }>Reset</button>
        </div>
    )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);