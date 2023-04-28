import React, {useContext, useEffect, useReducer, useState} from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] =  useState(false);
    const cartCtx = useContext(CartContext);


    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((accumulator, currentValue) =>{ return accumulator + currentValue.amount  }  ,0)

    const btnClasses =`${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;




    useEffect(()=>{
        console.log('bump check')
        if(items.length === 0 ){
            return;
        }

        setBtnIsHighlighted(true);
         const timer = setTimeout(()=>{
                setBtnIsHighlighted(false)
        },300)

        return ()=> {
             clearTimeout(timer);
        }
    },[items]);

    return <button className={btnClasses}  onClick={props.onClick}>
        <span className={classes.icon}>
        <CartIcon/>

        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton

