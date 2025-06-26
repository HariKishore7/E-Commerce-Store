import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../redux/cartSlice";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { useNavigate } from "react-router-dom";
import Image1 from '../assets/Images/Others/emptycart.jpg'


const Cart = () => {
  const cartInfo = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const products = cartInfo.products;
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [address, setAddress] = useState("Bangalore 500011");
  const navigate = useNavigate();

  const addItem = (e, product) => {
    dispatch(addToCart(product));
  }
  const removeItem = (e, product) => {
    dispatch(removeFromCart(product));
  }
  const deleteItem = async (e, product) => {
    await dispatch(deleteFromCart(product));
    // alert("Successfully deleted the item");
  }
  useEffect(() => {

  }, [products])
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {products.length ? (
        <div>
          <h3 className="font-bold text-xl mb-5">Shopping Cart</h3>
          <div className=" flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between mb-4 font-bold text-xs items-center">
                <p>Product Information</p>
                <div className="flex space-x-15 gap-2">
                  <p className="basis-1/4">Price</p>
                  <p className="basis-1/4">Quantity</p>
                  <p className="basis-1/4">Subtotal</p>
                  <p className="basis-1/4">Remove</p>
                </div>
              </div>
              {
                products.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 border-b">
                    <div className="md:flex items-center space-x-4">
                      <img src={item.image} className="w-16 h-16 object-contain rounded" />
                      <div className="flex-l ml-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                      </div>
                    </div>
                    <div className="flex space-x-15 items-center">
                      <p className="basis-1/4">${item.price}</p>
                      <div className="flex border items-center justify-center basis-1/4">
                        <button className="text-xl font-bold px-1.5 border-r hover:cursor-pointer" onClick={(e) => removeItem(e, item)}>-</button>
                        <p className="text-xl px-2">{item.quantity}</p>
                        <button className="text-xl font-bold px-1.5 border-l hover:cursor-pointer" onClick={(e) => addItem(e, item)}>+</button>
                      </div>
                      <p className="basis-1/4">${item.subTotal.toFixed(2)}</p>
                      <button className="text-xl text-red-500 hover:text-red-700 basis-1/4" onClick={(e) => deleteItem(e, item)}>
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="md:w-1/3 bg-white p-6 shadow-md rounded-lg pb-5 p-5">
              <h3 className="font-bold mb-5">Cart Totals</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cartInfo.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to <span className="text-xs font-bold">{address}</span></p>
                <button className="text-blue-500 hover:underline mt-1 ml-2" onClick={() => setIsModelOpen(true)}>Change address</button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${cartInfo.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800 text-sm" onClick={() => navigate('/Checkout')}>Proceed to Checkout</button>
            </div>
          </div>
          {isModelOpen && <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}><ChangeAddress address={address} setAddress={setAddress} setIsModelOpen={setIsModelOpen} /></Modal>}
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src={Image1}
            alt="Empty cart"
            className="h-90 my-2"
          />
        </div>
      )
      }
    </div >
  );
};

export default Cart;
