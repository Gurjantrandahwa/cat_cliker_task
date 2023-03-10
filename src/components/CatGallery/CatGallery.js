import React from "react";
import "./CatGallery.scss";

function CatGallery({cats, onClick}) {
    return (
        <div className="gallery">
            {cats.map((cat) => (
                <div key={cat.id}>
                    <div className="gallery-card" onClick={() => onClick(cat)}>
                        <div className={"gallery-title"}>
                            <h4>{cat.name}</h4>
                            <p>No. of times Clicked : {cat.clicks}</p>
                        </div>

                        <img src={cat.image} className="card-img-top" alt={cat.name}/>
                        <a href={"/"}>Card Link</a>


                    </div>
                </div>
            ))}
        </div>
    );
}

export default CatGallery;
