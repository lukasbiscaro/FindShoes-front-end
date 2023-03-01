import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BsLightningCharge, BsStar } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

import item1 from '../images/bg.png';

const HomePage = () => {
    return (
        <>
            <NavBar />
            
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-6">
                    <h1 className="font-bold text-white text-2xl mx-10 text-center leading-none md:text-7xl md:mx-56 relative mb-0 md:mb-4">
                        Collections
                    </h1>
                </div>

                <div class="mx-auto max-w-2xl py-2 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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
                        <div class="group relative p-4 bg-opacity-20 rounded-lg border-highlightSecondary md:border-2 border-opacity-30">
                            <a href="#">
                                <div className='absolute h-full w-full left-0 top-0 bg-gradient-to-b from-highlightSecondary rounded-md opacity-20 z-0'></div>
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-48 relative z-50">
                                    <img src={item1} alt="Front of men&#039;s Basic Tee in black." class="w-full object-cover object-center lg:h-48 lg:w-full h-48 rounded-lg" />
                                </div>
                                <div class="mt-4 flex justify-between relative z-50">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
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

            </main>

            <Footer />
        </>
    )
}

export default HomePage