import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

// Components
import ItemDetail from '../ItemDetail/ItemDetail';

// Services
import getProductsService from '../../services/getProductsService';

const ItemDetailContainer = () => {

    const [ product, setProduct ] = useState({})
    const { productId } = useParams()

    useEffect(() => {

        getProductsService()
            .then(resp => setProduct(resp.find(prod => prod.id === parseInt(productId))))
            .catch(err => console.error(err))
    },[productId]) 

    return (

        <div className="container">
            <ItemDetail product={ product } />
        </div>
        
    );
}

export default ItemDetailContainer;