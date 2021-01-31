import React from 'react';
import "./Product.css";
import {useStateValue} from './StateProvider';

function Product(props){

    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        //Add item to basket
        dispatch({
            type: 'Add_To_Basket', 
            element:{
                id:props.id,
                title:props.title,
                image:props.image,
                price: props.price,
                rating:props.rating,
            },
        });


    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p>{props.rating}</p>
                <p className="product__price">
                  <small>UGX</small>
                   <strong>{props.price}</strong>
             </p>

             <div className="product__rating">
                  {
                      Array(props.rating)
                      .fill()
                       .map((_) => ( 
                           <p>:star</p>
                        ))                    
                 }

                </div>
            </div>
            <img className="product__image" src={props.image}></img>
            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product;