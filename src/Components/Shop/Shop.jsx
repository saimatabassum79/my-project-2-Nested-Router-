import React, { useState } from 'react';
import SmallBanner from '../Shared/SmallBanner';
import ShopCard from '../ShopCard.jsx/ShopCard';
import ShopCategory from '../ShopCategory/ShopCategory';
import { FaAngleDown } from 'react-icons/fa6';
import FillByPrice from '../FillByPrice/FillByPrice';
import bgImage1 from '../../assets/banner-10.png';
import image from '../../assets/banner-9.png'
import NewProducts from '../NewProducts/NewProducts';
import Countdown from '../Countdown/Countdown';
import Banner2 from '../Shared/Banner2';
import SmallCart from '../SmallCart/SmallCart';

const Shop = () => {
    const [select, setSelect] = useState()
    const handleCategory = (id) => {
        setSelect(id);

    }
    return (
        <div>
            <SmallBanner
                title="Snack"
                P1="Shop"
                P2="Snack"
                btn1="Cabbage"
                btn2="Broccoli"
                btn3="Artichoke"
                btn4="Celery"
                btn5="Spinach"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-4 px-4 md:px-2">
                <p className="text-gray-500 text-[14px] md:text-[15px] mb-2 md:mb-0">
                    We found <span className="text-[#3BB77E]">29</span> items for you!
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[12px] text-gray-400">
                    <p className="cursor-pointer flex items-center gap-2 md:gap-3 hover:shadow-md p-2 rounded-md border border-gray-300">
                        Show : 50 <span><FaAngleDown /></span>
                    </p>
                    <p className="cursor-pointer flex items-center gap-2 md:gap-3 hover:shadow-md p-2 rounded-md border border-gray-300">
                        Sort By : Featured <span><FaAngleDown /></span>
                    </p>
                </div>
            </div>

            <div className='grid lg:grid-cols-12 grid-cols-1 gap-4'> 
                <div className='col-span-10'>
                     <ShopCard select={select}></ShopCard>
                      <Countdown ml1="lg:ml-4 ml-11" ml2="lg:ml-3 ml-11" weidth="lg:w-55 w-65" p="p-3 lg:p-2" text="text-2xl text-sm" t="lg:top-23 top-15" top="lg:top-40 top-35"></Countdown> 
                 </div> 
                    <div className='lg:col-span-2 '> 
                        <ShopCategory handleCategory={handleCategory}></ShopCategory> 
                        <FillByPrice></FillByPrice>
                         <NewProducts></NewProducts>
                    </div> 
            </div>

            <Banner2 bgImage1={bgImage1} image={image} w="w-130" mt="mt-17" ml="ml-20" title={`Stay home & get your daily needs from our shop`} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with " ></Banner2>
            <SmallCart></SmallCart>
        </div>
    );
};

export default Shop;