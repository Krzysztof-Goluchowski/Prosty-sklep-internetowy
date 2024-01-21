import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ShopContext} from "./shop-context";
import { PRODUCTS } from "../products";
import React, {useContext} from "react";



function SecondBlockHomePage() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const buyWriting ={
        fontSize: '80px',
        fontWeight: 'bold',
    };

    const productStyle ={
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        boxShadow: '0 0 9px rgba(0,0,0,.185)',
    };

    const productPhoto ={
        height: '45vh',
        width: '28vh',
        margin: '10px',
    };

    const price ={
        fontSize: '30px',
        margin: '10px',

    };

    const buttonStyle ={
        height: '100%',
        width: '60%',
        background: 'black',
        color: 'white',
        margin: '10px',
        '&:hover': {
            background: 'white',
        },
    };

    const { addToCart, cartItems } = useContext(ShopContext);



    return (
        <>
            <p style={buyWriting}>Kup coś w naszym sklepie!</p>
            <div className="SecondBlockHomePage hidden">

                <Carousel responsive={responsive}>
                    {PRODUCTS.map((product) => (
                        <div key={product.id} style={productStyle}>
                            <img src={product.productImage} alt={product.productName} style={productPhoto} />
                            <p style={price}>{product.productName}</p>
                            <p style={price}>{`$${product.price}`}</p>
                            <p>
                                <button style={buttonStyle} onClick={() => addToCart(product.id)}>
                                    Add to Cart {cartItems[product.id] > 0 && <> ({cartItems[product.id]}) </>}
                                 </button>
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default SecondBlockHomePage;