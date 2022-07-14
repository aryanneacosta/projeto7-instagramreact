import ReactDOM from 'react-dom';
import Corpo from "./components/Corpo";
import Fundo from "./components/Fundo";
import Navbar from "./components/Navbar";


function App() {
    return (
        <>
            <Navbar />
            <Corpo />
            <Fundo />
        </>
    );
}

ReactDOM.render(App(), document.querySelector(".root"));