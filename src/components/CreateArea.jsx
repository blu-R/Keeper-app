import React, { useState } from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        name === "title" ? setTitle(value) : setContent(value);
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                    value={title}
                />
                <textarea
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={content}
                />
                <button
                    onClick={(e) => {
                        props.addNote({ title: title, content: content });
                        e.preventDefault();
                        setTitle("");
                        setContent("");
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
