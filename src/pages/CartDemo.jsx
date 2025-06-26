// Redux Cart Demo (Mini Simulation)

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddItem, RemoveItem, IncrementQty, DecrementQty } from '../redux/cartSlice.js';

const CartDemo = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addPizza = () => {
    dispatch(AddItem({ id: 1, name: 'Pizza', price: 300, qty: 1 }));
  };

  const addBurger = () => {
    dispatch(AddItem({ id: 2, name: 'Burger', price: 200, qty: 1 }));
  };

  return (
    <div className="p-5 space-y-5 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">🛒 Redux Cart Demo</h1>

      <div className="space-x-3">
        <button onClick={addPizza} className="bg-green-400 px-4 py-2 rounded text-white">Add Pizza</button>
        <button onClick={addBurger} className="bg-blue-400 px-4 py-2 rounded text-white">Add Burger</button>
      </div>

      <div className="mt-6 bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-3">Cart Items:</h2>
        {cart.length === 0 ? (
          <div className="text-gray-500">Cart is empty</div>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="border p-3 rounded flex justify-between items-center">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <div className="text-sm text-gray-600">Qty: {item.qty} | Rs. {item.price}</div>
                </div>

                <div className="space-x-2">
                  <button onClick={() => dispatch(IncrementQty(item.id))} className="px-2 bg-green-300 rounded">+</button>
                  <button onClick={() => dispatch(DecrementQty(item.id))} className="px-2 bg-yellow-300 rounded">-</button>
                  <button onClick={() => dispatch(RemoveItem(item.id))} className="px-2 bg-red-400 text-white rounded">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <div className="mt-4 text-lg font-semibold text-right">
            Total: Rs. {cart.reduce((total, item) => total + item.qty * item.price, 0)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDemo;
