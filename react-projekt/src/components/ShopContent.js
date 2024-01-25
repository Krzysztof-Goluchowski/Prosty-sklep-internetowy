import "./shop.css";
import {PRODUCTS} from "../products";
import {ShopContext} from "./shop-context";
import chad from "../photos/chadquote2.png";
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";

function ShopContent() {
    const categories = ["Wszystko", "Białko", "Dopalacze"];
    const [selectedCategory, setSelectedCategory] = useState("Wszystko");

    const { addToCart, cartItems } = useContext(ShopContext);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts =
        selectedCategory === "Wszystko"
            ? PRODUCTS
            : PRODUCTS.filter((product) => product.category === selectedCategory);

    return (<div className="shopContainer">
        <img src={chad} className="chad"/>
        <div className="shopFilters">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={selectedCategory === category ? "filterButtonActive" : "filterButton"}
                >
                    {category}
                </button>
            ))}
        </div>
        <div className={"shopProducts"}>
            {filteredProducts.map((product) => (
                <div key={product.id} className="productShop">
                    <img src={product.productImage} alt={product.productName} className="productPhoto"/>
                    <p className="price">{product.productName}</p>
                    <p className="price">{`$${product.price}`}</p>
                    <p>
                        <button className="cartButton" onClick={() => addToCart(product.id)}>
                            Add to Cart {cartItems[product.id] > 0 && <> ({cartItems[product.id]}) </>}
                        </button>
                    </p>
                </div>
            ))}
        </div>
        <Link className="cartButton" to="/Shop/Edit">EDIT</Link>

    </div>);
}

export default ShopContent;