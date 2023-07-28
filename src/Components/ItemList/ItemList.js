import React from "react";
import Item from "src/Components/Item/Item.js";
import Header from "src/Components/Header/Header.js";
const ItemList = ({ products, category }) => {
return (
    <>
    <Header showAs="Shadow" />
    <h1 className="products__path">Tienda</h1>

    <div className="products">
        {products &&
        products.map((product) => {
            return <Item key={product.id} product={product} />;
        })}
    </div>
    </>
);
};

export default ItemList;