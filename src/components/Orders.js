import React, { useState, useEffect, useContext } from "react";
import ShoppingContext from "../context/shopping/shoppingContext";
import Order from "./Order";
import "./Orders.css";
import { db } from "../firebase";

const Orders = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { user } = shoppingContext;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders)
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
