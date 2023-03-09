import React from "react";
import "./CatForm.scss";

export default function CatForm({cat, handleChange, handleSubmit}) {
    return <div className={"form"}>
        <div className={"form-card"}>
            <h2>{cat ? "Edit Cat" : "Add Cat"}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={cat.name} onChange={handleChange} />
                <label htmlFor="image">Image URL:</label>
                <input type="text" name="image" value={cat.image} onChange={handleChange} />
                <button type="submit">{cat ? "Update" : "Add"}</button>
            </form>
        </div>
    </div>
}