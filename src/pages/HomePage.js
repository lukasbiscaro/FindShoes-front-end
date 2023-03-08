import React from 'react';
import NavBar from '../components/NavBar';
import NavBarLogged from '../components/NavBarLogged.js';
import Footer from '../components/Footer';
import { BsLightningCharge, BsStar } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import Islogged from '../components/IsLogged.js'
import item1 from '../images/bg.png';

const HomePage = () => {
    return (
        <>
        <NavBar/>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-24">
                    <h1 className="font-bold text-white text-2xl mx-2 text-center leading-none md:text-7xl md:mx-56 relative">
                        <span className="absolute text-highlightPrimary left-0 top-6 z-50 rotate-45">
                            <BsStar size={24} />
                        </span>
                        Buy or trade the Best Shoes in the World
                        <span className="absolute text-highlightPrimary2 right-0 bottom-0 z-50 -rotate-45">
                            <BsStar size={24} />
                        </span>
                    </h1>
                    <h2 className="mt-2 text-textGray text-sm px-6 text-center leading-none md:text-xl md:px-56">
                        The largest digital marketplace for the best shoes
                    </h2>
                    <a href="/collections" className="text-white mt-10 mb-10 flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 md:px-8 md:py-4 px-4 py-2 rounded-xl">
                        <span className="mr-2">
                            <BsLightningCharge />
                        </span>
                        <span className="text-xs md:text-xl"> EXPLORE THE COLLECTIONS</span>
                    </a>
                </div>


                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-24">
                    <h3 className="mt-2 mb-2 md:mb-0 text-highlightPrimary2 font-bold text-xs px-16 text-center leading-none md:text-base md:px-56">
                        Hot items of the week
                    </h3>
                    <h1 className="font-bold text-white text-2xl mx-10 text-center leading-none md:text-7xl md:mx-56 relative">
                        Best Shoes
                    </h1>
                </div>

                <div id="bestShoesCards" className="mb-60 h-60 overflowx-hidden">
                    <div className="relative w-full p-8 overflowx-hidden">
                        <div className="flex absolute left-0 animate-marquee-infinite overflowx-hidden"> 
                            <a href="#">             
                                <div className='flex w-64 mr-4'>
                                    <div className="w-60 p-4 md:w-64 md:p-4 md:h-auto bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                                        <img src={item1} alt="" className="w-full h-48 rounded-lg mb-4" />
                                        <p className="text-gray-400 text-xs font-bold">
                                            Collection
                                        </p>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the item
                                        </h4>
                                        <div className='flex flex-row justify-between items-center mt-8'>
                                            <div className='text-highlightPrimary2 text-base font-bold'>
                                                R$ 200,00
                                            </div>
                                            <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 md:px-6 md:py-3 px-3 py-2 rounded-xl">
                                                <span className="mr-2">
                                                    <FiShoppingCart />
                                                </span>
                                                <span className="text-xs md:text-xs font-regular"> Shop</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className='flex w-64 mr-4'>
                                    <div className="w-60 p-4 md:w-64 md:p-4 md:h-auto bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                                        <img src={item1} alt="" className="w-full h-48 rounded-lg mb-4" />
                                        <p className="text-gray-400 text-xs font-bold">
                                            Collection
                                        </p>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the item
                                        </h4>
                                        <div className='flex flex-row justify-between items-center mt-8'>
                                            <div className='text-highlightPrimary2 text-base font-bold'>
                                                R$ 200,00
                                            </div>
                                            <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 md:px-6 md:py-3 px-3 py-2 rounded-xl">
                                                <span className="mr-2">
                                                    <FiShoppingCart />
                                                </span>
                                                <span className="text-xs md:text-xs font-regular"> Shop</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className='flex w-64 mr-4'>
                                    <div className="w-60 p-4 md:w-64 md:p-4 md:h-auto bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                                        <img src={item1} alt="" className="w-full h-48 rounded-lg mb-4" />
                                        <p className="text-gray-400 text-xs font-bold">
                                            Collection
                                        </p>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the item
                                        </h4>
                                        <div className='flex flex-row justify-between items-center mt-8'>
                                            <div className='text-highlightPrimary2 text-base font-bold'>
                                                R$ 200,00
                                            </div>
                                            <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 md:px-6 md:py-3 px-3 py-2 rounded-xl">
                                                <span className="mr-2">
                                                    <FiShoppingCart />
                                                </span>
                                                <span className="text-xs md:text-xs font-regular"> Shop</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className='flex w-64 mr-4'>
                                    <div className="w-60 p-4 md:w-64 md:p-4 md:h-auto bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                                        <img src={item1} alt="" className="w-full h-48 rounded-lg mb-4" />
                                        <p className="text-gray-400 text-xs font-bold">
                                            Collection
                                        </p>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the item
                                        </h4>
                                        <div className='flex flex-row justify-between items-center mt-8'>
                                            <div className='text-highlightPrimary2 text-base font-bold'>
                                                R$ 200,00
                                            </div>
                                            <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 md:px-6 md:py-3 px-3 py-2 rounded-xl">
                                                <span className="mr-2">
                                                    <FiShoppingCart />
                                                </span>
                                                <span className="text-xs md:text-xs font-regular"> Shop</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className='flex w-64 mr-4'>
                                    <div className="w-60 p-4 md:w-64 md:p-4 md:h-auto bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                                        <img src={item1} alt="" className="w-full h-48 rounded-lg mb-4" />
                                        <p className="text-gray-400 text-xs font-bold">
                                            Collection
                                        </p>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the item
                                        </h4>
                                        <div className='flex flex-row justify-between items-center mt-8'>
                                            <div className='text-highlightPrimary2 text-base font-bold'>
                                                R$ 200,00
                                            </div>
                                            <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 md:px-6 md:py-3 px-3 py-2 rounded-xl">
                                                <span className="mr-2">
                                                    <FiShoppingCart />
                                                </span>
                                                <span className="text-xs md:text-xs font-regular"> Shop</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className='flex w-64 mr-4'>
                                    <div className="w-60 p-4 md:w-64 md:p-4 md:h-auto bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                                        <img src={item1} alt="" className="w-full h-48 rounded-lg mb-4" />
                                        <p className="text-gray-400 text-xs font-bold">
                                            Collection
                                        </p>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the item
                                        </h4>
                                        <div className='flex flex-row justify-between items-center mt-8'>
                                            <div className='text-highlightPrimary2 text-base font-bold'>
                                                R$ 200,00
                                            </div>
                                            <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 md:px-6 md:py-3 px-3 py-2 rounded-xl">
                                                <span className="mr-2">
                                                    <FiShoppingCart />
                                                </span>
                                                <span className="text-xs md:text-xs font-regular"> Shop</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-36">
                    <h3 className="mt-2 mb-2 md:mb-0 text-highlightSecondary font-bold text-xs px-16 text-center leading-none md:text-base md:px-56">
                        Discovery
                    </h3>
                    <h1 className="font-bold text-white text-2xl mx-10 text-center leading-none md:text-7xl md:mx-56 relative mb-0 md:mb-4">
                        Collections
                    </h1>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." className="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div className="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            <span className="text-gray-400 text-xs font-bold">
                                                Collection
                                            </span>
                                        </h3>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the Collection
                                        </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." className="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div className="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            <span className="text-gray-400 text-xs font-bold">
                                                Collection
                                            </span>
                                        </h3>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the Collection
                                        </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." className="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div className="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            <span className="text-gray-400 text-xs font-bold">
                                                Collection
                                            </span>
                                        </h3>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the Collection
                                        </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." className="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div className="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            <span className="text-gray-400 text-xs font-bold">
                                                Collection
                                            </span>
                                        </h3>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the Collection
                                        </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." className="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div className="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            <span className="text-gray-400 text-xs font-bold">
                                                Collection
                                            </span>
                                        </h3>
                                        <h4 className='text-white text-lg font-bold'>
                                            Name of the Collection
                                        </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-24">
                    <h3 className="mt-2 mb-2 md:mb-0 text-highlightSecondary font-bold text-xs px-16 text-center leading-none md:text-base md:px-56">
                        ❤ Loved by people
                    </h3>
                    <h1 className="font-bold text-white text-2xl mx-10 text-center leading-none md:text-7xl md:mx-56 relative mb-0 md:mb-4">
                        Around the World
                    </h1>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="group relative p-4 bg-white rounded-lg">
                            <div className="flex justify-between relative z-50">
                                <div>
                                    <p className="text-sm text-gray-900 mb-4">
                                        <span className="text-gray-900 text-xs font-regular">
                                            The best part about nftmkt is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.
                                        </span>
                                    </p>
                                    <p className='text-black text-lg font-bold'>
                                        Name of the person
                                    </p>
                                    <p className='text-highlightPrimary text-sm'>
                                        CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative p-4 bg-white rounded-lg">
                            <div className="flex justify-between relative z-50">
                                <div>
                                    <p className="text-sm text-gray-900 mb-4">
                                        <span className="text-gray-900 text-xs font-regular">
                                            The best part about nftmkt is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.
                                        </span>
                                    </p>
                                    <p className='text-black text-lg font-bold'>
                                        Name of the person
                                    </p>
                                    <p className='text-highlightPrimary text-sm'>
                                        CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative p-4 bg-white rounded-lg">
                            <div className="flex justify-between relative z-50">
                                <div>
                                    <p className="text-sm text-gray-900 mb-4">
                                        <span className="text-gray-900 text-xs font-regular">
                                            The best part about nftmkt is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.
                                        </span>
                                    </p>
                                    <p className='text-black text-lg font-bold'>
                                        Name of the person
                                    </p>
                                    <p className='text-highlightPrimary text-sm'>
                                        CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative p-4 bg-white rounded-lg">
                            <div className="flex justify-between relative z-50">
                                <div>
                                    <p className="text-sm text-gray-900 mb-4">
                                        <span className="text-gray-900 text-xs font-regular">
                                            The best part about nftmkt is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.
                                        </span>
                                    </p>
                                    <p className='text-black text-lg font-bold'>
                                        Name of the person
                                    </p>
                                    <p className='text-highlightPrimary text-sm'>
                                        CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative p-4 bg-white rounded-lg">
                            <div className="flex justify-between relative z-50">
                                <div>
                                    <p className="text-sm text-gray-900 mb-4">
                                        <span className="text-gray-900 text-xs font-regular">
                                            The best part about nftmkt is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.
                                        </span>
                                    </p>
                                    <p className='text-black text-lg font-bold'>
                                        Name of the person
                                    </p>
                                    <p className='text-highlightPrimary text-sm'>
                                        CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HomePage