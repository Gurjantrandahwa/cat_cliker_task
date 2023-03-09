import './App.scss';
import {useEffect, useState} from "react";
import CatList from "./components/CatList/CatList";
import CatCard from "./components/CatCard/CatCard";
import CatForm from "./components/CatForm/CatForm";
import {data} from "./data";
import CatGallery from "./components/CatGallery/CatGallery";



function App() {
    const [cats, setCats] = useState([]);
    const [activeCat, setActiveCat] = useState(null);
    const [catForm, setCatForm] = useState({name: '', image: '', clicks: 0});

    useEffect(() => {
        setCats([...data]);
    }, []);
    const handleCatClick = (cat) => {

        setActiveCat(cat);
    };

    const handleCatImageClick = () => {

        setActiveCat((prevCat) => ({
            ...prevCat,
            clicks: prevCat.clicks + 1,
        }));
    };
    const handleGalleryCatClick = (cat) => {

        setActiveCat((prevCat) => ({
            ...prevCat,
            clicks: prevCat.clicks + 1,
        }));
        setActiveCat(cat);
    };

    const handleEditClick = () => {

        setCatForm(activeCat);
    };
    const handleFormChange = (e) => {

        setCatForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value,
        }));
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (activeCat) {
            const updatedCats = cats.map((cat) =>
                cat.name === activeCat.name ? {...catForm} : cat
            );
            setCats(updatedCats);
            setActiveCat(catForm);
        } else {
            setCats([...cats, {...catForm, clicks: 0}]);
            setActiveCat({...catForm, clicks: 0});
        }
        setCatForm({name: '', image: '', clicks: 0});
    };
    return <div className={"app"}>
        <div className={"header"}>
            <h2>Cat Clicker App</h2>
        </div>
        <div className={"wrapper"}>
            <CatList cats={cats} activeCat={activeCat} handleClick={handleCatClick}/>
            <CatCard cat={activeCat} handleImageClick={handleCatImageClick} handleEditClick={handleEditClick}/>
            <CatForm cat={catForm} handleChange={handleFormChange} handleSubmit={handleFormSubmit}/>
        </div>
        <div>
            <CatGallery cats={cats} handleClick={handleGalleryCatClick}/>
        </div>
    </div>
}

export default App;
