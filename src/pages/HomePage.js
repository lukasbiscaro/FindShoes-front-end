import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import NavBarLogged from '../components/NavBarLogged.js';
import Islogged from '../components/IsLogged.js';
import Footer from '../components/Footer';
import { BsLightningCharge, BsStar } from 'react-icons/bs';
import axios from 'axios';
import ShoesCard from "../components/ShoesCard";
import CollectionsCard from "../components/CollectionsCard";

import item1 from '../images/bg.png';

const HomePage = () => {
    const [shoes, setShoes] = useState([])
    const [colections, setCollections] = useState([])

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get('http://localhost:3001/products', {headers})
        .then(response => {
            setShoes(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/products', {headers})
        .then(response => {
            setCollections(response.data)
        })
        .catch(err => console.log(err))
    }, [])

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

                <div id="bestShoesCards">
                    <div className="mx-auto max-w-2xl py-2 sm:py-0 lg:max-w-7xl">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            { shoes.length > 0 && shoes.map(singleShoes => {
                                return (
                                    <ShoesCard singleShoes={singleShoes} key={singleShoes._id} />
                                )
                            })}   
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
                        { colections.length > 0 && colections.map(brand => {
                            return (
                                <CollectionsCard collection={brand} key={brand._id} />
                            )
                        })}   
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