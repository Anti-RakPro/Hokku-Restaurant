import React, { useState} from "react";
import Header from "./components UI/Layout/Header";
import Meals from "./components UI/Meals/Meals";
import Cart from "./components UI/Cart/Cart";
import CartProvider from "./components UI/store/CartProvider";
function App() {

    const [cartIsShown,setCartIsShown] = useState(false);
    // const [x1,x2] = useState(true);
    const showCartHandler = ()=>{
        setCartIsShown(true);
    }
    const hideCartHandler = ()=>{
        setCartIsShown(false);
    }

    return (
    <CartProvider>
        {cartIsShown && <Cart onHideCartHandler={hideCartHandler}/>}
       <Header onShowCartHandler={showCartHandler}/>
       <main>
           <Meals/>
       </main>

    </CartProvider>
  );
}

export default App;
