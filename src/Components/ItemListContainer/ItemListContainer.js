import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "src/Components/ItemList/ItemList.js";
import {
getAllProducts,
getProductsByCategory,
} from "src/utils/firebaseFetching.js";
import Loader from "src/Components/Loader/Loader.js";

const ItemListContainer = () => {
const [loading, setLoading] = useState(true);
const [items, setItems] = useState([]);
const { category } = useParams();

const fetchProducts = async () => {
    const products = await getAllProducts();
    setItems(products);
    setLoading(false);
};

const fetchProductsByCategory = async (cat) => {
    const products = await getProductsByCategory(cat);
    setItems(products);
    setLoading(false);
};
useEffect(() => {
    category ? fetchProductsByCategory(category) : fetchProducts();
}, [category]);

return <>{loading ? <Loader /> : <ItemList products={items} />}</>;
};

export default ItemListContainer;