import React from "react";

export default function CatGallery({cats, handleClick}) {
    return<div>
        {cats.map(cat => (
            <div key={cat.name} className="cat-item" onClick={() => handleClick(cat)}>
                <img src={cat.image} alt={cat.name} />
                <div className="cat-name">{cat.name}</div>
                <div className="clicks">{cat.clicks}</div>
            </div>
        ))}
    </div>
}