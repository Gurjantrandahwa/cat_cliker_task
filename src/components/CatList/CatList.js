import React from "react";

import "./CatList.scss";

function CatList({ cats, activeCat, onClick }) {
    return (
        <div className="list-group">
            {cats.map((cat) => (
                <div
                    key={cat.id}
                    className={`single-cat  ${
                        cat.id === activeCat.id ? "active" : ""
                    }`}
                    onClick={() => onClick(cat)}
                >
                   <p className={"cat-name"}> {cat.name}</p>
                    <p className={"age"}>{cat.clicks}</p>
                </div>
            ))}
        </div>
    );
}

export default CatList;
