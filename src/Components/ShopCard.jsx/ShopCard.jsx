
import { FaAngleDown, FaCartShopping, FaRegHeart, FaStar } from 'react-icons/fa6';
import useData from '../hook/useData';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishList';

const ShopCard = ({ select }) => {
    const dispatch = useDispatch();
    const { products } = useData();
    const filter = select ? products.filter(product => product.id == select) : products

    return (
        <div className='grid lg:grid-cols-5 grid-cols-1  px-1 lg:px-3  mx-auto container gap-3 '>

            {
                filter.slice(0, 10).map(product => (
                     <div>
                        <div className="card bg-base-100 h-[380px] relative transition cursor-pointer  mb-4 hover:shadow-md border border-gray-200">

                            <figure>

                                <span style={{ backgroundColor: `${product.labelColor}` }}
                                    className=' absolute top-0  left-0 text-white text-sm font-medium px-3 py-1 rounded-br-lg rounded-tl-lg ' >
                                    {product.label}
                                </span>
                                <img className='lg:w-35 w-45 '
                                    src={product.image}
                                    alt="Shoes" />

                            </figure>
                            <div className=" pl-3">
                                <p className='text-[10px] my-3 text-[#B6B6B6] '>{product.category}</p>
                                <h2 className="card-title text-[13px] text-[#253D4E]">
                                    {product.name}
                                </h2>
                                <div className='text-[#FDC040] my-3 flex items-center'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className='text-[#B6B6B6]' />
                                    <p className='text-[#B6B6B6] ml-2'>({product.rating})</p>
                                </div>
                                <p className='text-[#B6B6B6] my-2'>By : <span className='text-[#3BB77E] '>{product.brand}</span> </p>
                                 <p className='text-[#3BB77E] my-3 font-bold text-[14px]'>{product.price} <span className='line-through text-gray-400 text-[12px]'>{product.oldPrice}</span></p>
                           
                                   
                                    <div className='flex items-center justify-between  gap-2 pr-6'>
                                         <button onClick={()=>dispatch(addToWishlist(product))} className="flex items-center justify-center gap-1 text-green-600 bg-green-100 hover:bg-green-600 hover:text-white transition-all duration-300 py-1 px-3 cursor-pointer sm:px-4 rounded-md text-xs sm:text-sm">
                                                                    <FaRegHeart /> 
                                                                </button>
                                        <button onClick={() => dispatch(addToCart(product))} className="flex items-center justify-center gap-1 text-green-600 bg-green-100 hover:bg-green-600 hover:text-white transition-all duration-300 py-1 px-3 cursor-pointer sm:px-4 rounded-md text-xs sm:text-sm">
                                            <FaCartShopping /> Add
                                        </button>
                                        <Link to={`/products/${product.id}`}> <button className="flex items-center justify-center gap-1 text-green-600 bg-green-100 hover:bg-green-600 hover:text-white transition-all duration-300 py-1 px-3 cursor-pointer sm:px-4 rounded-md text-xs sm:text-sm">
                                            Details
                                        </button></Link>
                                    </div>
                                  
                               

                            </div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    );
};

export default ShopCard;