import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import {useContext, useState} from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = props => {

    const [isCheckout, setIsCheckout] = useState(false);

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0


    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = ()=>{
        setIsCheckout(true);
    }

    const cartItems =
        <ul className={'cart-items'}>{
            cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                >{item.name}</CartItem>)
        }</ul>


    const modalActions =
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCartHandler}>
                Close
            </button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>
                Order
            </button>}
        </div>

    return (
        <Modal onHideCartHandler={props.onHideCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            { isCheckout && <Checkout onCancel={props.onHideCartHandler} />}
            { !isCheckout && modalActions }


        </Modal>
    )
}

export default Cart

