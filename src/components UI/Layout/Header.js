import React from "react";
import mealsImage from '../../assets/img/meals-bg.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=>{
    return <React.Fragment>
     <header className={classes.header} >
         <h1>Hokku Restaurant</h1>
         <HeaderCartButton onClick={props.onShowCartHandler}/>
     </header>
        <div className={classes['main-image']}>
            <img  src={mealsImage} alt='A table full of delicious food!'/>
        </div>
    </React.Fragment>
}

export default Header
