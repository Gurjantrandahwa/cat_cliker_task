import React, {useState} from "react";
import "./CatForm.scss";

function CatForm({cat, onSubmit}) {
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
    }
    return (
        <div className={"form"}>
            <div className={"form-card"}>
                <button onClick={resetForm} className={"open-btn"}>
                    Open the form
                </button>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <div>
                            <label htmlFor="name" className="form-label">
                                Cat Name
                            </label>
                        </div>

                        <input
                            type="text"
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
                            type={"number"}
                            value={formData.clicks}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={"buttons"}>
                        <button type="submit" className="save">
                            Save
                        </button>
                        <button onClick={resetForm}
                            className="undo">
                            Undo
                        </button>
                    </div>

                </form>
            </div>

        </div>

    );
}

export default CatForm;
