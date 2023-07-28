import React from "react";
import { useCartContext } from "src/context/CartState.js";
import { MdOutlineClose } from "react-icons/md";
import Item from "src/Components/Item/Item.js";
import Divider from "src/Components/Divider/Divider.js";
import Overlay from "src/Components/Overlay/Overlay.js";
import { Link } from "react-router-dom";

const Cart = () => {
const { isOpen, closeCart, items } = useCartContext();

let subTotal = 0;
const handleCalcSubTotal = (qty, price) => {
    let itemSubTotal = qty * price;
    subTotal += itemSubTotal;
};
const handleClose = () => {
    closeCart();
};

return (
    <Overlay show={isOpen}>
    <div className={isOpen ? "cart show" : "cart"}>
        <MdOutlineClose onClick={handleClose} className="cart__close" />
        {items.length === 0 ? (
        <div className="cart__empty">
            <h3 className="empty">Tu carrito esta vacío</h3>
            <Link to="/shop" className="cart__go" onClick={handleClose}>
                Ir a la tienda
            </Link>
        </div>
        ) : (
        <div className="cart__content">
            <h3 className="cart__title">Mi Carrito</h3>
            <Divider isCart={true} />
            <div className="cart__items">
            {items.map((product) => {
                handleCalcSubTotal(product.quantity, product.price);
                return (
                <Item showAs="CartItem" product={product} key={product.id} />
                );
            })}
            </div>
            <Divider isCart={true} />
            <div className="flex-row cart__subtotal">
            <h4>Subtotal</h4>
            <span>${subTotal}</span>
            </div>
            <Divider isCart={true} />
            <div className="flex-row cart__total">
            <h4>Total</h4>
            <span>${subTotal}</span>
            </div>
            <Link to="/checkout" className="cart__cta" onClick={handleClose}>
                Verificar
            </Link>
        </div>
        )}
    </div>
    </Overlay>
);
};

export default Cart;