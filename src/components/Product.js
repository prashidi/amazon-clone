import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "../context/shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, title, rating, price } });
  };
  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button className="product_button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
