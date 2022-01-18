import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import ShoppingContext from "../context/shopping/shoppingContext";

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
