
const ItemDetail = ({ product }) => {

  return (
    <div>
        <p> { product.id } </p>
        <p> { product.title } </p>
        <p> { product.price } </p>
    </div>
  )
}

export default ItemDetail
