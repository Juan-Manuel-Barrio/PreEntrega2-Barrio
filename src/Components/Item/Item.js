import { Link } from 'react-router-dom'

const Item = ({ product }) => {

  return (
    <div>
      <Link to={`/detalle/${product.id}`}>
        <h1> {  product.title } </h1>
        <p> { product.price } </p>
      </Link>
    </div>
  )
}

export default Item
