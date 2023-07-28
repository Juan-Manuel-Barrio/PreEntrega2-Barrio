import React from "react";
import Navbar from "src/Components/Navbar/Navbar.js";
import logo_header from "src/logo_primario.png";

const Header = ({ showAs }) => {
return (
    <header
    className={`${showAs === "Shadow" ? "header header--shadow" : "header"}`}
    >
    <img src={logo_header} alt="" className="header__logo" />
    <Navbar />
    </header>
);
};

export default Header;