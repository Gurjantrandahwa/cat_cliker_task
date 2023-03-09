import React, {useState} from "react";
import {data} from "./data";
import CatList from "./components/CatList/CatList";
import CatCard from "./components/CatCard/CatCard";
import CatForm from "./components/CatForm/CatForm";
import CatGallery from "./components/CatGallery/CatGallery";
import "./App.scss"

function App() {
    const [cats, setCats] = useState(data);
    const [activeCat, setActiveCat] = useState(cats[0]);

    const handleCatClick = (cat) => {
        setActiveCat(cat);
    };

    const handleCatImageClick = () => {
        const updatedCat = {...activeCat, clicks: activeCat.clicks + 1};
        const updatedCats = cats.map((cat) =>
            cat.id === activeCat.id ? updatedCat : cat
        );
        setCats(updatedCats);
        setActiveCat(updatedCat);
    };

    const handleGalleryImageClick = (cat) => {
        const updatedCat = {...cat, clicks: cat.clicks + 1};
        const updatedCats = cats.map((c) =>
            c.id === updatedCat.id ? updatedCat : c
        );
        setCats(updatedCats);
        setActiveCat(updatedCat);
    };

    const handleCatFormSubmit = (formData) => {
        if (formData.id) {

            const updatedCat = {...formData, age: calculateAge(formData.clicks)};
            const updatedCats = cats.map((cat) =>
                cat.id === updatedCat.id ? updatedCat : cat
            );
            setCats(updatedCats);
            setActiveCat(updatedCat);
        } else {

            const newCat = {
                ...formData,
                id: Date.now(),
                clicks: 0,
                age: calculateAge(0),
            };
            setCats([...cats, newCat]);
            setActiveCat(newCat);
        }
    };

    const calculateAge = (clicks) => {
        if (clicks <= 5) {
            return "Infant";
        } else if (clicks <= 12) {
            return "Child";
        } else if (clicks <= 25) {
            return "Young";
        } else if (clicks <= 40) {
            return "Middle-Age";
        } else if (clicks <= 60) {
            return "Old";
        } else {
            return "Very Old";
        }
    };

    return (
        <div className="app">
            <div className={"header"}>
                <h2>
                    Cat Clicker App
                </h2>
            </div>
            <div className="wrapper">

                <CatList cats={cats} activeCat={activeCat} onClick={handleCatClick}/>

                <CatCard cat={activeCat} onClick={handleCatImageClick}/>
                <CatForm cat={activeCat} onSubmit={handleCatFormSubmit}/>

            </div>
            <hr style={{margin: "30px 0",}}/>
            <hr/>
            <div className="col">
                <CatGallery cats={cats} onClick={handleGalleryImageClick}/>
            </div>

        </div>
    );
}

export default App;
