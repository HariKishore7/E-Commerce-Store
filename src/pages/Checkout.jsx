import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOrderDetails }) => {
    const [toggleOpen, setToggleOpen] = useState({
        billing: false,
        shipping: true,
        payment: true,
    });
    const [paymentMethod, setPaymentMethod] = useState("");
    const cartInfo = useSelector(state => state.cart);
    const product = cartInfo.products;
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        zipCode: ""
    })
    const navigate = useNavigate();

    const handleOrderDetails = () => {
        const newOrder = {
            products: cartInfo,
            orderNumber: "123456",
            shippingInfo: shippingInfo,
            totalPrice: cartInfo.totalPrice

        };
        setOrderDetails(newOrder);
    }

    return (
        <div className='container mx-auto py-8 min-h-96 md:px-16 lg:px-24'>
            <h3 className='font-bold text-lg my-5 ml-5'>Checkout</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    {/* Billing Information */}
                    <div className='p-2 mb-6 rounded-lg bg-gray-100'>
                        <div className='flex items-center justify-between ' onClick={() => setToggleOpen((prev) => ({ ...prev, billing: !prev.billing }))}>
                            <h3 className='font-semibold text-lg'>Billing Information</h3>
                            {
                                toggleOpen.billing ? <FaAngleDown /> : <FaAngleUp />
                            }
                        </div>
                        <div className={`space-y-4 ${toggleOpen.billing ? "" : "hidden"} my-4`}>
                            <div>
                                <label htmlFor='' className='text-gray-700'>Name</label>
                                <input className='bg-white w-full px-3 py-2' type='text' placeholder='Enter Name' />
                            </div>
                            <div>
                                <label htmlFor='' className='text-gray-700'>Email</label>
                                <input className='bg-white w-full px-3 py-2' type='email' placeholder='Enter Email' />
                            </div>
                            <div>
                                <label htmlFor='' className='text-gray-700'>Phone</label>
                                <input className='bg-white w-full px-3 py-2' type='number' placeholder='Enter Phone number' />
                            </div>
                        </div>
                    </div>
                    {/* Shipping Information */}
                    <div className='bg-gray-100 p-2 mb-6 rounded-lg'>
                        <div className='flex items-center justify-between ' onClick={() => setToggleOpen((prev) => ({ ...prev, shipping: !prev.shipping }))}>
                            <h3 className='font-semibold text-lg'>Shipping Information</h3>
                            {
                                toggleOpen.shipping ? <FaAngleDown /> : <FaAngleUp />
                            }
                        </div>
                        <div className={`space-y-4 ${toggleOpen.shipping ? "" : "hidden"} my-4`}>
                            <div>
                                <label htmlFor='' className='text-gray-700'>Address</label>
                                <input className='bg-white w-full px-3 py-2' type='text' placeholder='Enter Address' onChange={(e) => setShippingInfo((prev) => ({ ...prev, address: e.target.value }))} />
                            </div>
                            <div>
                                <label htmlFor='' className='text-gray-700'>City</label>
                                <input className='bg-white w-full px-3 py-2' type='email' placeholder='Enter City Name' onChange={(e) => setShippingInfo((prev) => ({ ...prev, city: e.target.value }))} />
                            </div>
                            <div>
                                <label htmlFor='' className='text-gray-700'>Zip Code</label>
                                <input className='bg-white w-full px-3 py-2' type='number' placeholder='Enter Zip Code' onChange={(e) => setShippingInfo((prev) => ({ ...prev, zipCode: e.target.value }))} />
                            </div>
                        </div>
                    </div>
                    {/* Payment method */}
                    <div className='bg-gray-100 p-2 mb-6 rounded-lg'>
                        <div className='flex items-center justify-between ' onClick={() => setToggleOpen((prev) => ({ ...prev, payment: !prev.payment }))}>
                            <h3 className='font-semibold text-lg'>Payment method</h3>
                            {
                                toggleOpen.payment ? <FaAngleDown /> : <FaAngleUp />
                            }
                        </div>
                        <div className={`space-y-4 ${toggleOpen.payment ? "" : "hidden"} my-4`}>
                            <div className='flex items-center px-3 space-x-3'>
                                <input className='border  px-3 py-2' type='radio' placeholder='Enter Address' checked={paymentMethod === "COD"} onChange={() => setPaymentMethod("COD")} />
                                <label htmlFor='' className='text-gray-700'>Cash on Delivery</label>
                            </div>
                            <div className='flex items-center px-3 space-x-3'>
                                <input className='border  px-3 py-2' type='radio' placeholder='Enter Address' checked={paymentMethod === "CARD"} onChange={() => setPaymentMethod("CARD")} />
                                <label htmlFor='' className='text-gray-700'>Debit card</label>
                            </div>
                            {paymentMethod === "CARD" &&
                                <div className='space-y-4 my-4 bg-gray-100 p-4 rounded-lg'>
                                    <h3 className='font-semibold text-lg'>Debit card Information</h3>
                                    <div>
                                        <label htmlFor='' className='text-gray-700'>Card Number</label>
                                        <input className='w-full px-3 py-2 bg-white rounded-lg' type='number' placeholder='Enter Card Number' />
                                    </div>
                                    <div>
                                        <label htmlFor='' className='text-gray-700'>Card Holder Name</label>
                                        <input className='w-full px-3 py-2 bg-white' type='text' placeholder='Enter Name' />
                                    </div>
                                    <div className='flex flex-col md:flex-row  gap-3'>
                                        <div>
                                            <label htmlFor='' className='text-gray-700'>Expiry Date</label>
                                            <input className='w-full px-3 py-2 bg-white' type='date' placeholder='Enter Expiry Date' />
                                        </div>
                                        <div>
                                            <label htmlFor='' className='text-gray-700'>CVV</label>
                                            <input className='w-full px-3 py-2 bg-white' type='number' placeholder='Enter CVV' />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md text-xs h-full'>
                    <h3 className='font-bold text-md'>Order summary</h3>
                    <div>
                        {product.map(item => (
                            <div className='flex justify-between mt-4 items-center'>
                                <div className='flex items-center'>
                                    <img src={item.image} className='w-10 h-10 object-contain rounded' />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{item.name}</h4>
                                        <p className='text-gray-600'>${item.price} x {item.quantity}</p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>${item.subTotal}</div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between mt-4 border-t pt-4'>
                        <span>Total Price</span>
                        <span className='font-semibold'>${cartInfo.totalPrice.toFixed(2)}</span>
                    </div>
                    <button className='w-full bg-red-600 text-white hover:bg-red-800 p-1 rounded mt-6 py-2' onClick={() => {
                        handleOrderDetails();
                        navigate('/order-confirmation')
                    }}>Place Order</button>
                </div>
            </div>
        </div >
    )
}

export default Checkout