import React from "react";
import "./CatForm.scss";
export default function CatForm() {
return<div className={"form"}>
<div className={"form-card"}>
    <button>
        open new form
    </button>
    <form>
        <div>
            <div>
                <label>Cat name</label>
            </div>

            <input/>
        </div>

        <div>
            <div>
                <label>Cat Image</label>
            </div>

            <input/>
        </div>
        <div>
            <div>
                <label>Cat Clicks</label>
            </div>

            <input/>
        </div>
        <button>Save</button>
        <button>Undo</button>
    </form>
</div>
</div>
}