import React from "react";
import NavBar from "../NavBar/NavBar.js";
import logo_header from "../../logo_primario.png";

const Header = ({ showAs }) => {
return (
    <header
    className={`${showAs === "Shadow" ? "header header--shadow" : "header"}`}
    >
    <img src={logo_header} alt="" className="header__logo" />
    <NavBar />
    </header>
);
};

export default Header;