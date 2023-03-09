import React from "react";

import "./CatCard.scss";

export default function CatCard({cat, handleImageClick, handleEditClick}) {
    if (!cat) {
        return <div className="cat-card">

        </div>;
    }
    return <div className={"card-wrapper"}>
        <div className={"card"}>
            <h2>{cat.name}</h2>
            <div className="cat-image" onClick={handleImageClick}>
                <img
                    src={cat.image ? cat.image : "https://4.bp.blogspot.com/-XkviAtJ1s6Q/T3YFb2RUhDI/AAAAAAAAAVQ/EHomLZlFMKo/s1600/small+cat.jpg"}
                    alt={cat.name}/>
                <div className="clicks">{cat.clicks}</div>
            </div>
            <div className="cat-details">
                {cat.nicknames.map( value => {
                    return<p key={value.id}>{value}</p>
                })}
                <button onClick={handleEditClick}>Edit</button>
            </div>

        </div>

    </div>
}