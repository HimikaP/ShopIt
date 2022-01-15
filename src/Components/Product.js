import React from "react";

export default function Product(props) {
  return (
    <div className="row gy-2 py-2 mt-3">
      <div className="col-6  px-4 ">
        <div className="border bg-light   ">
          <h2>
            {props.product.name}{" "}
            <span className="badge bg-info text-dark">₹{props.product.price}</span>
          </h2>
        </div>
      </div>
      
        <div className="btn-group col-2 mx-4" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick = { ()=>{props.decrementQuantity(props.index)}}>
           -          </button>
          <button type="button" className="btn btn-outline-primary" >
           {props.product.quantity}
          </button>
          <button type="button" className="btn btn-outline-primary" onClick ={ () =>{ props.incrementQuantity(props.index) } }>
            + 
          </button>
      </div>
      ₹{props.product.quantity * props.product.price}
      <button className="btn btn-danger col-2 mx-5 " onClick={() => {props.removeItem(props.index);} }>Remove Item</button>
    </div>
  );
}
 // we can pass a function in onClick but we cant call it here