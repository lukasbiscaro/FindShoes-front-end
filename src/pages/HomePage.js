import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ShoesCard from "../components/ShoesCard";
import CollectionsCard from "../components/CollectionsCard";
import CommentCard from '../components/CommentCard';
import { BsLightningCharge, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [dataProducts, setDataProducts] = useState([])
    const [dataComments, setDataComments] = useState([])
    const [dataCollections, setDataCollections] = useState([])

    console.log(dataCollections)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-products`)
            .then(response => {
                setDataProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-comments`)
            .then(response => {
                setDataComments(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/collections`)
            .then(response => {
                setDataCollections(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <NavBar />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-24">
                    <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-5 mx-10 lg:mx-16 text-center relative">
                        <span className="absolute text-highlightPrimary left-0 top-6 z-50 rotate-45">
                            <BsStar size={24} />
                        </span>
                        Buy or trade the Best Shoes in the World
                        <span className="absolute text-highlightPrimary2 right-0 bottom-0 z-50 -rotate-45">
                            <BsStar size={24} />
                        </span>
                    </h1>
                    <h2 className="mt-2 text-textGray text-sm sm:text-lg md:text-xl lg:text-2xl px-6 text-center leading-none">
                        The largest digital marketplace for the best shoes
                    </h2>
                    <Link
                        to="/collections"
                        className="text-white mt-10 mb-5 flex justify-center items-center transition-all duration-500 ease-in-out bg-highlightPrimary hover:bg-opacity-70 md:px-8 md:py-4 px-4 py-2">
                        <span className="mr-2">
                            <BsLightningCharge />
                        </span>
                        <span className="text-md sm:text-xl lg:text-2xl md:text-xl uppercase">Explore all sneakers</span>
                    </Link>
                </div>
                <div className="flex flex-col relative justify-center items-center mt-12 md:mt-24">
                    <h3 className="mt-2 mb-2 md:mb-0 text-highlightPrimary2 font-bold text-xs px-16 text-center md:text-base md:px-56">
                        Hot items of the week
                    </h3>
                    <h1 className="text-white uppercase mb-14 sm:mb-12 md:mb-20 text-2xl mx-5 text-center leading-none md:text-4xl md:mx-40 relative">
                        Best Shoes
                    </h1>
                </div>

                <div>
                    <div className="mx-auto max-w-2xl py-2 sm:py-0 lg:max-w-7xl">
                        <div className="flex flex-row gap-x-4 gap-y-10 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 overflow-x-auto">
                            {dataProducts.length > 0 && dataProducts.map(product => {
                                return (
                                    <ShoesCard product={product} key={product._id} />
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* <div className="mt-12 mb-12 flex flex-col relative justify-center items-center sm:mt-36">
                    <h3 className="mt-2 mb-2 md:mb-0 text-highlightSecondary font-bold text-xs px-16 text-center leading-none md:text-base md:px-56">
                        Discovery
                    </h3>
                    <h1 className="font-light text-white uppercase text-2xl mx-10 text-center leading-none md:text-5xl md:mx-56 relative">
                        Collections
                    </h1>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {dataCollections.length > 0 && dataCollections.map(collection => {
                            return (
                                <CollectionsCard brand={collection} key={collection._id} />
                            )
                        })}
                    </div>
                </div> */}

                <div className="flex flex-col relative justify-center items-center mt-12 md:mt-28 sm:mt-16">
                    <h3 className="mt-2 mb-2 md:mb-0 text-highlightSecondary font-bold text-xs px-16 text-center md:text-base md:px-56">
                        ❤ Loved by people
                    </h3>
                    <h1 className="text-white uppercase sm:mb-12 md:mb-20 text-2xl mx-5 text-center leading-none md:text-4xl md:mx-40 relative">
                        Around the World
                    </h1>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <div className="mt-14 grid grid-cols-1 gap-y-10 w-full overflow-hidden sm:grid-cols-2 gap-x-10 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-6">
                        {
                            dataComments.length > 0 && dataComments.map(comment => {
                                return (
                                    <CommentCard comment={comment} key={comment._id} />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HomePage