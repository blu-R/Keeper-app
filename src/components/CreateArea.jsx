import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [showComponent, setShowComponent] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        name === "title" ? setTitle(value) : setContent(value);
    }

    return (
        <div>
            <form className="create-note">
                {showComponent && (
                    <input
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                        value={title}
                    />
                )}
                <textarea
                    onClick={() => setShowComponent(true)}
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows={showComponent ? "3" : "1"}
                    value={content}
                />
                <Zoom in={showComponent}>
                    <Fab
                        onClick={(e) => {
                            props.addNote({ title: title, content: content });
                            e.preventDefault();
                            setTitle("");
                            setContent("");
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
