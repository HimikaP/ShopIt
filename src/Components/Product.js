import React from "react";

export default function Product(props) {
  return (
    <div className="row gy-2 py-2">
      <div className="col-6  px-4 ">
        <div className="border bg-light   ">
          <h2>
            {props.product.name}{" "}
            <span class="badge bg-info text-dark">₹{props.product.price}</span>
          </h2>
        </div>
      </div>
      <div className="col-4">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary" onClick = { ()=>{props.decrementQuantity(props.index)}}>
           -          </button>
          <button type="button" class="btn btn-outline-primary" >
           {props.product.quantity}
          </button>
          <button type="button" class="btn btn-outline-primary" onClick ={ () =>{ props.incrementQuantity(props.index) } }>
            + 
          </button>
        </div>
      </div>
      ₹{props.product.quantity * props.product.price}
    </div>
  );
}
 // we can pass a function in onClick but we cant call it here