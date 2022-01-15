import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
     props.productList.length >0  ?     //length not quantity
    props.productList.map((product, i) => {
      return (
        
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          index={i}
          removeItem={props.removeItem}
        />
      )
    }) : <h1>OOoops !! add some items asap </h1> 
  );
}
    // jahan pe onClick use karenge sirf wahi par props ke liye arrowfunction and this. use hoga
