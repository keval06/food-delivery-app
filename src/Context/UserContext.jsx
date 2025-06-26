import React, { createContext, useState } from 'react'
import { food_items } from '../food';

export const dataContext = createContext();

const UserContext = ({children}) => {

    let [input, setInput] = useState("");
    let [category, setCategory] = useState(food_items)
    let [showCart, setShowCart] = useState(false)
    // let [selectedCategory, setSelectedCategory] = useState("All")
    let data = {
        input,
        setInput, 
        category, 
        setCategory, 
        showCart,
        setShowCart,
        // selectedCategory,
        // setSelectedCategory,
    }

  return (
    <div>
        <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
      
    </div>
  )
}

export default UserContext;
