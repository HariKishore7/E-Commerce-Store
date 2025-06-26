import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addToCart } from '../redux/cartSlice'
import StarRating from './StarRating'

const ProductCard = ({ productInfo }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e, productInfo) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(productInfo));
        toast.success("Product added to cart successfully");
    }

    return (
        <Link to={`/product/${productInfo.id}`}>
            <div className='bg-white p-4 rounded shadow transform transition-transform duration-300 hover:scale-105 relative'>
                <img src={productInfo.image} className='w-50 h-35 mb-4' />
                <h3 className='text-lg font-semibold'>{productInfo.name}</h3>
                <p className='text-gray-500'>${productInfo.price}</p>
                <div className='flex gap-4 items-center py-2 mt-2'>
                    <StarRating rating={productInfo.rating} />
                    <div className='border bg-red-600 text-white rounded-full w-8 h-8 absolute bottom-4 right-2 flex items-center justify-center hover:w-32 hover:bg-red-700 group transition-all' onClick={(e) => handleAddToCart(e, productInfo)}>
                        <span className='group-hover:hidden'>+</span>
                        <button className='hidden group-hover:block' >Add to Cart</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard