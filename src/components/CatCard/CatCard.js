import React from "react";
import cat from "../../images/cat1.jpg"
import "./CatCard.scss";

export default function CatCard() {
    return <div className={"card-wrapper"}>
        <div className={"card"}>
            <div className={"card-header"}>
                <h4>Tabby</h4>
                <p>No. of times clicked : 5</p>
            </div>

            <img src={cat} className={""} alt={""}/>
            <div className={"nickname"}>
                <p>toby, toby, tubby</p>
                <p>grown up baby</p>
                <a href={"/"}>Card Link</a>
            </div>

        </div>

    </div>
}