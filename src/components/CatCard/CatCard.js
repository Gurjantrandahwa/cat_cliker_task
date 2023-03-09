import React from "react";

import "./CatCard.scss";


function CatCard({cat, onClick}) {
    return (
        <div className="card-wrapper">
            <div className={"card"}>
                <div className="card-title">
                    <h4>{cat.name}</h4>
                    <p className="card-text">{`No. of times clicked : ${cat.clicks}`}</p>
                </div>


                <img
                    src={cat.image}
                    className="card-img-top"
                    alt={cat.name}
                    onClick={onClick}
                />
                <div className="card-body">


                    <p className="card-text">{cat.age}</p>
                    <a href={"/"}>Card Link</a>
                </div>
            </div>


        </div>
    );
}

export default CatCard;