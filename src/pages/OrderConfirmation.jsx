import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = ({ orderDetails }) => {
    const navigate = useNavigate();
    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <h1 className='font-semibold text-2xl mb-4'>Thank you for your order!</h1>
            <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>
            <div className='bg-gray-100 mt-4 rounded-lg px-6 space-y-4 py-5'>
                <h3 className='font-semibold mb-2'>Order Summary</h3>
                <p>Order Number: {orderDetails.orderNumber}</p>
                <div>
                    <h4 className='font-semibold mb-2'>Shipping Information</h4>
                    <p>{orderDetails.shippingInfo.address}</p>
                    <p>{orderDetails.shippingInfo.city}</p>
                    <p>{orderDetails.shippingInfo.zipCode}</p>
                </div>
                <h4 className='font-semibold mb-2'>Item Ordered</h4>
                <div>
                    {
                        orderDetails.products.products.map((item) => (
                            <div key={item.id} className='flex justify-between mb-2'>
                                <p>{item.name} (x{item.quantity})</p>
                                <p>${item.subTotal} </p>
                            </div>))
                    }
                </div>
                <div className='flex justify-between mt-4 font-bold text-md'>
                    <span>Total Price:</span>
                    <span className='font-semibold'>${orderDetails.products.totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <div className='mt-4 space-x-4 mb-8'>
                <button className='bg-green-500 text-white p-2 rounded hover:bg-green-600'>Track Order</button>
                <button className='bg-red-600 text-white p-2 rounded hover:bg-red-800' onClick={() => navigate('/')}>Continue Shopping</button>
            </div>
        </div>
    )
}

export default OrderConfirmation