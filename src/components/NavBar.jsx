import { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { setSearchTerm } from '../redux/productSlice';
import Modal from './Modal';

const NavBar = ({setSearch}) => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => { }, [isLogin])
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(e.target.value));
    }
    return (
        <nav className='shadow-md'>
            <div className='max-auto px-6 md:px-16 lg:px-6 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold'>
                    <Link to="/">E-Shop</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form>
                        <input type='text' placeholder='search product' className='w-full border border-gray-400 rounded px-4 py-2' onChange={(e) => { setSearch(e.target.value); handleSearch(e) }} />
                        <FaSearch className='absolute top-3 right-3 text-red-590'></FaSearch>
                    </form>
                </div>
                <div>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {
                            products.length > 0 && <p className='absolute text-xs left-3 top-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white'>{products.length}</p>
                        }
                    </Link>
                </div>
                <div className='mx-4' onClick={() => {
                    setIsModelOpen(true);
                }}>
                    <button className='hidden md:block  hover:cursor-pointer font-bold text-md' >Login/Register</button>
                    <button className='block md:hidden  hover:cursor-pointer'><FaUser /></button>
                </div>
            </div>
            <div className='flex justify-center items-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover:underline'> Home</Link>
                <Link to="/Shop" className='hover:underline'> Shop</Link>
                <Link to="/Contact" className='hover:underline'> Contact</Link>
                <Link to="/About" className='hover:underline'> About</Link>
            </div>
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
                {isLogin ? <Login setIsLogin={setIsLogin} setIsModelOpen={setIsModelOpen} /> : <Register setIsLogin={setIsLogin} />}
            </Modal>
        </nav>
    )
}

export default NavBar