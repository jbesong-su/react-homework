import React from 'react'; 
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct'; 





function Checkout (){

    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>

            {basket?.length == 0 ? (
                <div> 
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your basket. To buy an item or add to your basket click the 
                        "Add to Basket" button next to item;</p>
                    </div>
            ): (
                <div>
                    <h2>Your shopping basket</h2>
                    {basket.map(element => (

                        <CheckoutProduct 
                        id={element.id}
                        title={element.title}
                        image={element.image}
                        price={element.price}
                        rating={element.rating}/>
                    ))}
                    
                </div>
            )}
        </div>
    );

};

export default Checkout