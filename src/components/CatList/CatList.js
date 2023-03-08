import React from "react";
import {data} from "../../data";
import "./CatList.scss";

export default function CatList() {
    return <div className={"list"}>
        {
            data.map((cat) => {
                return <div key={cat.id} className={"single-cat"}>
                    <p className={"cat-name"}>{cat.catName}</p>
                    <p className={"age"}>{cat.age}</p>
                </div>
            })
        }
    </div>
}