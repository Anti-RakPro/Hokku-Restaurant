
import {useRef, useState} from "react";
import classes from './Checkout.module.css';

const isEmpty = value => value.trim().length === 0 ;
const isFiveChars = value => value.trim().length === 5 ;



const Checkout = props => {

    const [formInputValidity, setFormInputsValidity] = useState({
        name: true,
        city: true,
        street: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event)=> {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid       = !isEmpty(enteredName);
        const enteredStreetIsValid     = !isEmpty(enteredStreet);
        const enteredCityIsValid       = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostal);

        setFormInputsValidity({
            name:       enteredNameIsValid ,
            street:     enteredStreetIsValid,
            city:       enteredCityIsValid ,
            postalCode: enteredPostalCodeIsValid
        })

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name:       enteredName ,
            street:     enteredStreet,
            city:       enteredCity ,
            postalCode: enteredPostal
        })

    }

    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
    const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`

    return <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
            {!formInputValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef} />
            {!formInputValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalInputRef} />
            {!formInputValidity.postalCode && <p>Please enter a valid postal code (5 characters long)!</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit} >Confirm</button>
        </div>

    </form>
};

export default Checkout;