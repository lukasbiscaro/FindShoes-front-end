import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FiShoppingCart } from 'react-icons/fi';

import item1 from '../images/bg.png';

const HomePage = () => {
    return (
        <>
            <NavBar />
            
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-6">
                    <h1 className="font-bold text-white text-2xl mx-10 text-center leading-none text-7xl mx-56 relative">
                        Explore All Items
                    </h1>
                </div>

                <div id="bestShoesCards">
                    <div className="mx-auto max-w-2xl py-2 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            <a href="/teste">
                                <div className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
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
                                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                                            <span className="mr-2">
                                                <FiShoppingCart />
                                            </span>
                                            <span className="text-xs text-xs font-regular"> Shop</span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                            <a href="/teste">
                                <div className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
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
                                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                                            <span className="mr-2">
                                                <FiShoppingCart />
                                            </span>
                                            <span className="text-xs text-xs font-regular"> Shop</span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                            <a href="/teste">
                                <div className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
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
                                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                                            <span className="mr-2">
                                                <FiShoppingCart />
                                            </span>
                                            <span className="text-xs text-xs font-regular"> Shop</span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                            <a href="/teste">
                                <div className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
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
                                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                                            <span className="mr-2">
                                                <FiShoppingCart />
                                            </span>
                                            <span className="text-xs text-xs font-regular"> Shop</span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                            <a href="/teste">
                                <div className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
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
                                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                                            <span className="mr-2">
                                                <FiShoppingCart />
                                            </span>
                                            <span className="text-xs text-xs font-regular"> Shop</span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                            <a href="/teste">
                                <div className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
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
                                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                                            <span className="mr-2">
                                                <FiShoppingCart />
                                            </span>
                                            <span className="text-xs text-xs font-regular"> Shop</span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                            <a href="/teste">
                                <div className="p-4 group relative bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
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
                                        <a href="link" className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                                            <span className="mr-2">
                                                <FiShoppingCart />
                                            </span>
                                            <span className="text-xs text-xs font-regular"> Shop</span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
            </main>

            <Footer />
        </>
    )
}

export default HomePage