import React from 'react'; 
import "./Home.css";
import Product from "./Product";

function Home (params) {
    return(

        <div className='home'>

        <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" 
        />

       
        {/* or https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg 
        for the image
        or 
        http://g-ec2.images-amazon.com/images/G/01/digital/video/merch/subs/prime/heroes/web_3p-gateway-banner_FT_3000x600._V288262445_UR1500,300_FMJPG_.jpg */}
        

         {/*Prduct id, title, price, rating, image*/}
         <div  className="home__row">
            <Product 
                    id="123456"
                    title="Adidas running shoes"
                    price={35.69}
                    rating={2}
                    image="https://image.peltzshoes.com/images/products/1_739463_ZM.jpg" />
                            

                            <Product 
                             id="123456"
                              title="Adidas running shoes"
                              price={35.69}
                              rating={2}
                              image="https://image.peltzshoes.com/images/products/1_739463_ZM.jpg" />

                    <Product 
                              id="123456"
                             title="Adidas running shoes"
                             price={35.69}
                                rating={2}
                               image="https://image.peltzshoes.com/images/products/1_739463_ZM.jpg" />

            </div>

            <div className="home__row">
            <Product 
                    id="123456"
                    title="Adidas running shoes"
                    price={35.69}
                    rating={2}
                    image="https://image.peltzshoes.com/images/products/1_739463_ZM.jpg" />
            </div>
        </div>

    );
};

export default Home