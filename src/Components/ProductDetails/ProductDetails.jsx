import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router';
import Banner2 from '../Shared/Banner2';
import bgImage1 from '../../assets/banner-10.png'
import image from '../../assets/banner-9.png'
import SmallCart from '../SmallCart/SmallCart';


const ProductDetails = () => {

    const products = useLoaderData();
    const { id } = useParams();
    const product = products?.find(product => product.id == id);
    console.log(product);

    return (
        <div className=''>
            <div className="flex gap-8 bg-base-100 my-8  ml-40  ">

                  <div className='border border-gray-200 rounded-2xl  p-6'>
                      <img className='w-120 '
                        src={product.image}
                        alt="Shoes" />
                  </div>

                <div className="">
                     <p className='my-3'>   <span style={{ backgroundColor: `${product.labelColor}` }}
                        className=' text-white   text-sm font-medium px-3 py-1 rounded-br-lg rounded-tl-lg ' >
                        {product.label}
                    </span></p>
                    
                   
                    <h2 className="card-title  text-[28px] text-[#253D4E]">
                        {product.name}
                    </h2>
                    <div className='text-[#FDC040] flex items-center text-sm my-4'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className='text-[#B6B6B6]' />
                        <p className='text-[#B6B6B6] ml-2'>({product.reviews} reviews)</p>
                    </div>
                     <p className='text-[#3BB77E] font-bold text-[34px]'>${product.price} <span className='line-through text-gray-400 text-[15px]'>{product.oldPrice}</span></p>
                     <p className='text-[#B6B6B6] text-sm w-7/12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>
                    <div className='flex items-center gap-2 mt-3'>
                      
                       <p className='text-gray-500'>Size/Weight :</p>
                    <div className='flex items-center gap-3 text-sm '>
                           <p className='text-[#B6B6B6] hover:text-white p-2 rounded-md bg-gray-200 hover:bg-[#3BB77E] cursor-pointer'>50kg</p>
                       <p className='text-white p-2 rounded-md bg-[#3BB77E] cursor-pointer'>60kg</p>
                       <p className='text-[#B6B6B6] hover:text-white p-2 rounded-md bg-gray-200 hover:bg-[#3BB77E] cursor-pointer'>70kg</p>
                       <p className='text-[#B6B6B6] hover:text-white p-2 rounded-md bg-gray-200 hover:bg-[#3BB77E] cursor-pointer'>80kg</p>
                    </div>
                    </div>

                   <div className='flex gap-2 items-center'>
                      <button className=' btn w-30 my-3 rounded-md text-[12px]   text-white bg-[#3BB77E]  hover:-translate-y-1 duration-500'> <span className=''><FaCartShopping /></span>Add to cart</button>
                        <p className='text-[#B6B6B6] hover:text-white p-3 hover:-translate-y-1 h- rounded-md bg-gray-200 hover:bg-[#3BB77E] cursor-pointer'><CiHeart /></p>
                   </div>

                </div>
            </div>
            <Banner2 bgImage1={bgImage1} image={image} w="w-130" mt="mt-17" ml="ml-20"  title={`Stay home & get your daily needs from our shop`} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with " ></Banner2>
            <SmallCart></SmallCart>

        </div>
    );
};

export default ProductDetails;