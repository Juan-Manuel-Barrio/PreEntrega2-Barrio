import React from "react";
import { Link } from "react-router-dom";
import Header from "src/Components/Header/Header.js";

const Home = () => {
return (
    <>
    <Header />
    <div className="home">
        <h1 className="home__title">La Fabrica de Bang-Ok</h1>

        <Link to="/shop" className="home__cta">
        Comprar
        </Link>

    </div>
    </>
);
};

export default Home;