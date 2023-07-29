import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Home = () => {
return (
    <>
    <Header />
    <div className="home">
        <h1 className="home__title">Bang-Ok Showroom</h1>

        <Link to="/shop" className="home__cta">
        Comprar
        </Link>

    </div>
    </>
);
};

export default Home;