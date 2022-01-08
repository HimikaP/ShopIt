import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import addItem from "./Components/addItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 12",
      quantity: 2,
    },
    {
      price: 9990,
      name: "RealMe note 12",
      quantity: 3,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount , setTotalAmount]= useState(0);
                                       //initial state

 
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    totalAmount+= newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      totalAmount-= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  return (
    <>
      <Navbar />
      <addItem />
      <main className="container">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer totalAmount={totalAmount} />
      <h2>{totalAmount}</h2>
    </>
  );
}

export default App;
