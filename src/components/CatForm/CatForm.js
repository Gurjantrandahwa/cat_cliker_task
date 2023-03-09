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
                        <div className="mb-3">
                            <div>
                                <label htmlFor="name" className="form-label">
                                    Cat Name
                                </label>
                            </div>

                            <input
                                type="text"
                                required
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="image" className="form-label">
                                    Cat Image
                                </label>
                            </div>

                            <input
                                type="url"
                                className="form-control"
                                id="image"
                                name="image"
                                required
                                value={formData.image}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="clicks" className="form-label">
                                    Cat Clicks
                                </label>
                            </div>

                            <input
                                className="form-control"
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
