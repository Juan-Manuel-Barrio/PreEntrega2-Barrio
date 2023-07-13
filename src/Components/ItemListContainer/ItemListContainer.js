import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';

import getProductsService from '../../services/getProductsService';

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [ products, setProducts ] = useState([])

    useEffect(() => {

        getProductsService()
            .then(resp => categoryId 
                ? setProducts(resp.filter (product => product.category === categoryId)) 
                : setProducts(resp))
            .catch(err => console.error(err))

    },[categoryId]) 


    return (

        <div className="container">
            <ItemList products={ products } />
        </div>
    
    );
}

export default ItemListContainer;