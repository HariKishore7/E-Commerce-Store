import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addQuantityToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import StarRating from '../components/StarRating';

const ProductDetails = () => {
    const { id } = useParams();
    const products = useSelector(state => state.products.products)
    const [productInfo, setProductInfo] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const newProduct = products.find(item => item.id === parseInt(id));
        setProductInfo(newProduct);
    }, [id])
    return (
        <>{
            productInfo?.name ? (
                < div className='container mx-auto py-8 px-4 md:px-16 lg:px-24' >
                    < div className='flex flex-col md:flex-row gap-x-16' >
                        <div className='md:w-1/2 py-4 shadow-md md:px-8  flex justify-center'>
                            <img src={productInfo.image} className='h-full' />
                        </div>
                        <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
                            <h2 className='text-3xl font-semibold mb-2'>{productInfo.name}</h2>
                            <p className='text-xl font-semibold text-gray-800 mb-4'>${productInfo.price}</p>
                            <div className='flex items-center mb-4 gap-x-2'>
                                <input id="quantity" type='number' min="1" className='border rounded border-gray-400 p-1 w-16' placeholder='Ex:2' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                <button className='bg-red-600 text-white p-2 hover:bg-red-800 text-sm' onClick={() => {
                                    if (quantity >= 1) {
                                        dispatch(addQuantityToCart({ ...productInfo, quantity: parseInt(quantity) }));
                                        toast.success("Product added to cart successfully")
                                    } else {
                                        toast.error("Please add number of items")
                                    }
                                }}>Add to Cart</button>
                            </div>
                            <StarRating rating={productInfo.rating} />
                            <div className='flex flex-col gap-y-4 mt-4'>
                                <p className='flex items-center'>
                                    <FaCarSide className='mr-1' />
                                    Delivery & Return
                                </p>
                                <p className='flex items-center'>
                                    <FaQuestion className='mr-1' />
                                    Ask a Question
                                </p>
                            </div>
                        </div>
                    </div >
                    <div className='mt-8'>
                        <h3 className='text-xl font-bold mb-2'>Product description</h3>
                        <p>The above product is from trusted seller.</p>
                    </div>
                </div>
            ) :
                (<>Loading...</>)
        }
        </>
    )
}

export default ProductDetails