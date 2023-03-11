import React, {useState} from "react";
import "./CatForm.scss";

function CatForm({cat, onSubmit}) {
    const [isActive, setIsActive] = useState(false);
    const [formData, setFormData] = useState({
        name: cat.name || "",
        image: cat.image || "",
        clicks: cat.clicks || 0,
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            ...formData,
            clicks: cat.clicks || formData.clicks,
            id: cat.id,
        });
        setFormData({
            name: "",
            image: "",
            clicks: 0,
        })
    };
    const resetForm = () => {
        setFormData({
            name: "",
            image: "",
            clicks: 0,
        })
        setIsActive(true);
    }

    const undo = () => {
        setFormData({
            name: "",
            image: "",
            clicks: 0,
        })
        setIsActive(false)
    }
    return (
        <div className={"form-wrapper"}>
            <button onClick={resetForm} className={"open-btn"}>
                Open the form
            </button>
            <div className={`close${isActive ? "open" : ""}`}>
                <div className={"form-card"}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label htmlFor="name" >
                                    Cat Name
                                </label>
                            </div>

                            <input
                                type="text"
                                required

                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="image">
                                    Cat Image
                                </label>
                            </div>

                            <input
                                type="url"
                                id="image"
                                name="image"
                                required
                                value={formData.image}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div >
                            <div>
                                <label htmlFor="clicks">
                                    Cat Clicks
                                </label>
                            </div>

                            <input
                                id="clicks"
                                name="clicks"
                                required
                                type={"number"}
                                value={formData.clicks}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={"buttons"}>
                            <button type="submit" className="save">
                                Save
                            </button>
                            <button onClick={undo}
                                    className="undo">
                                Undo
                            </button>
                        </div>

                    </form>
                </div>

            </div>

        </div>

    );
}

export default CatForm;
