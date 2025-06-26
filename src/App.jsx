import React from "react";
import Home from "./pages/Home";
import {ToastContainer} from "react-toastify"

const App = ()=>{
  return(
    <div>
      {/* <h1 className="text-3xl text-red-700 bg-amber-300 px-10 py-3">Food Delivery App</h1> */}
      <Home/>
      <ToastContainer autoClose={1500}/>
    </div>
  )
}

export default App;