import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from './StateProvider';



function CheckoutProduct(props) {
    const [{basket}, dispatch] = useStateValue(); 
    const removeFromBasket = () => {
        dispatch({
            type:"Remove_From_Basket",
            id:props.id,
        });


    };
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProduct__image" src={props.image}/>

            <div className="CheckoutProduct__info">
                <p className="CheckoutPoduct__title">{props.title}</p>

                <p className="CheckoutPoduct__price">
                <small>UGX</small>
                <strong>{props.price}</strong>
                </p>
            

            <div className="CheckoutProduct__rating">
                {Array(props.rating)
                .fill()
                .map((_, i) => (
                    <p>:-D</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove form Basket</button>
        </div>
        </div>
    )
}

export default CheckoutProduct
