import './App.scss';
import CatList from "./components/CatList/CatList";
import CatCard from "./components/CatCard/CatCard";
import CatForm from "./components/CatForm/CatForm";

function App() {
    return <div className={"app"}>
        <div className={"header"}>
            <h2>Cat Clicker App</h2>
        </div>
        <div className={"wrapper"}>
            <CatList/>
            <CatCard/>
            <CatForm/>
        </div>

    </div>
}

export default App;
