import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import inputAdornment from '@material-ui/core/InputAdornment';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            <Link to="/login">
            <img className="header_logo" 
            src="https://www.searchpng.com/wp-content/uploads/2019/01/Amazon-Logo-1024x402.png"
            alt="amz">

            </img>
            </Link>
            <div className="header__search">
                <input type="text" placeholder="Search" className="search_input"/>
                <button title="submit" className="search_submit">submit</button>
               {/* <SearchIcon /> */}
               </div>

            <div className="header_nav">
                {/*1st Link link does not cause refresh*/}
                <Link to="/login" className="header__link">
                <div className="header__option">
                <span className="header_optionline1">Hello World</span>
                <span className="header_optionline2">Sign In</span>
                </div>
                </Link>

                {/*2nd Link */}

                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header_optionline1">Returns</span>
                <span className="header_optionline2">& Orders</span>
                </div>
                </Link>

                {/*3rd Link */}

                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header_optionline1">Your</span>
                <span className="header_optionline2">Prime</span>
                </div>
                </Link>

                {/*4 Link * Basket Icon */}
                <Link to="/checkout" className="header__link">
                    <div className="header_optionBasket">
                        <button>Basket</button>
                        {/*}
                        <ShoppingBasketIcon /> */}
                        <p className="header__optionline2 header_basketCount">0</p>
                    </div>



                </Link>


                
                </div> 
        </nav>
    )
}

export default Header;
