import React from "react";

import "./CatList.scss";

export default function CatList({cats, activeCat, handleClick}) {
    return <div className={"list"}>

            {cats.map(cat => (
                <div key={cat.name}
                     className={cat === activeCat ? "cat-item active" : "cat-item"}
                     onClick={() => handleClick(cat)}
                >
                    {cat.name}
                </div>
            ))}

    </div>
}