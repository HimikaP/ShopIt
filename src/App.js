import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 12",
      quantity: 0,
    },
    {
      price: 9990,
      name: "RealMe note 12",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  // ()=>{ 
  //   let sum=0;
  //   productList.map((sum)=>{sum+=products.quantity*products.price})
  //   return (sum)
  //initial state

  //Function to increment quantity

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  //Function to increment quantity

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    //to remove an item from the list
      newProductList.splice(index, 1);
    console.log(newProductList);

    setProductList(newProductList);
    setTotalAmount(totalAmount);
  };

  const addItem = (name , price) =>{
    let newProductList = [...productList];
    //to add a new item to a list
    newProductList.push({
      price:price ,
      name:name,
      quantity:0 ,

    } );
    setProductList(newProductList); 
  } ;

  return (
    <>
      <Navbar />
     
      <main className="container">
      <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} />
      {/* <h2>{totalAmount}</h2> */}
    </>
  );
}

export default App;
