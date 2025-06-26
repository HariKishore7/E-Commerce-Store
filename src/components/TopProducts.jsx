import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mockData } from '../assets/mockData';
import { setProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';

const TopProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    useEffect(() => {
        dispatch(setProducts(mockData));
    }, []);
    const selectedIds = [4, 16, 25, 28, 14];
    return (
        <div className='container mx-auto py-12'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-6 px-2 hover:cursor-pointer'>
                {
                    products.products.filter(item => selectedIds.includes(item.id)).map((product, index) => {
                        return (
                            <ProductCard productInfo={product} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopProducts