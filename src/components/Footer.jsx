import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; ~ bLu.Я ~ {currentYear}</p>
        </footer>
    );
}

export default Footer;
