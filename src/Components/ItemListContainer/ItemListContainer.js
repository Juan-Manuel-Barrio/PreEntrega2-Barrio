import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Components
import ItemList from '../ItemList/ItemList';

// Services
import getProductsService from '../../services/getProductsService';


const ItemListContainer = () => {

const { categoryId } = useParams()

const [ products, setProducts ] = useState([])

    useEffect(() => {

        getProductsService()
            .then(resp => categoryId //condicion
                ? setProducts(resp.filter (product => product.category === categoryId)) //if
                : setProducts(resp)) //else
            .catch(err => console.error(err))
    },[categoryId]) 

    return (

        <div className="container">
            <ItemList products={ products } />
        </div>
    );
}

export default ItemListContainer;