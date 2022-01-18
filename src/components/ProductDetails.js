import React from "react";
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
  const params = useParams()

  console.log(params)
  return (
    <div>
      <h1>Product Details Page</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default ProductDetails;
