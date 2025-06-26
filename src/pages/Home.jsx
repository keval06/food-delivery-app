import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../Context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  let {
    category,
    setCategory,
    input,
    showCart,
    setShowCart,
    selectedCategory,
    setSelectedCategory,
  } = useContext(dataContext);

  function filterCategory(catName) {
    // setSelectedCategory(catName)

    if (catName === "All") {
      setCategory(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === catName );
      setCategory(newList);
    }
  }

  let items = useSelector(state=>state.cart)

  //total
  
    let subTotal = items.reduce((total, item)=>total + item.qty * item.price,0)
    let deliveryFee = 20;
    let taxes = subTotal*0.5/100;
    let total = (subTotal + deliveryFee + taxes).toFixed(2);
 
  
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%] ">
          {Categories.map((item) => {
            return (
              <div
                className={`w-[140px] h-[150px] flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200 `}
                onClick={() => filterCategory(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {/* Category */}

      {/* Food item Card  */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {/**No items found */}
        {input && category.length === 0 ? (
          <div className="text-center text-xl w-full py-20 text-gray-600 italic tracking-wide">
            No items found for "<span className="text-red-500">{input}</span>"
          </div>
        ) : (
            //Original card to be shown
          category.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        )}
      </div>

      {/* Cart on rigth side */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }` }
      >
        {/* Slider start */}
        <header className="w-full flex justify-between items-center ">
          <span className="text-green-400 font-semibold text-[18px]">
            Order items
          </span>
          <RxCross2
            className="w-[30px] h-[30px] text-red-600 cursor-pointer font-semibold hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {/* Items of cart */}
        {/* If items>0 then show cart , else empty cart */}
        {items.length > 0 ? <>
        <div className="w-full mt-9 flex flex-col gap-8 ">
          {items.map((item)=>(
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          )) }
          
        </div>

          {/* total and subtotal */}
        <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 ">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Sub Total</span>
            <span className="text-lg font-semibold text-green-400">Rs. {subTotal}/-</span>
          </div>
           {/*  */}
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Delivery Fees</span>
            <span className="text-lg font-semibold text-green-400">Rs. {deliveryFee}/-</span>
          </div>
          {/*  */}
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold">Taxes</span>
            <span className="text-lg font-semibold text-green-400">Rs. {taxes}/-</span>
          </div>
        </div>

        {/* total */}
        <div className="w-full flex justify-between items-center p-9 ">
            <span className="text-gray-600 font-semibold text-2xl">Total</span>
            <span className="font-semibold text-green-400 text-2xl">Rs. {total}/-</span>
          </div>
          {/* Place order button */}

          <button className="w-[80%] p-3 bg-green-300 text-white rounded-lg font-semibold text-lg hover:bg-green-400 cursor-pointer transition-all" onClick={()=>{toast.success("Order Placed Successfully..")}}>Place Order</button>
          </> 
          : 
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">Empty Cart
          </div>
          }
      </div>
    </div>
  );
};

export default Home;
