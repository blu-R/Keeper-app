import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
    return (
        <header>
            <h1>
                <span>
                    <HighlightIcon fontSize="inherit" />
                    Keeper
                </span>{" "}
                of the light
            </h1>
        </header>
    );
}

export default Header;
