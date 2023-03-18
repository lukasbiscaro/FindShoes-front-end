import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ShoesCard from "../components/ShoesCard"
import CommentCard from '../components/CommentCard'
import { BsLightningCharge, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [dataProducts, setDataProducts] = useState([])
    const [dataComments, setDataComments] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-products`)
            .then(response => {
                setDataProducts(response.data)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-comments`)
            .then(response => {
                setDataComments(response.data)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <NavBar />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-24">
                    <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl mb-5 mx-10 lg:mx-16 text-center relative">
                        <span className="absolute text-highlightPrimary left-0 top-6 z-20 rotate-45">
                            <BsStar size={24} />
                        </span>
                        Buy or trade the Best Shoes in the World
                        <span className="absolute text-highlightPrimary2 right-0 bottom-0 z-20 -rotate-45">
                            <BsStar size={24} />
                        </span>
                    </h1>
                    <h2 className="mt-2 text-textGray text-sm sm:text-lg md:text-xl lg:text-2xl px-6 text-center leading-none">
                        The largest digital marketplace for the best shoes
                    </h2>
                    <Link
                        to="/all-sneakers"
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
                {
                    loading
                        ?
                        <div className="mx-auto max-w-2xl py-2 sm:py-0 lg:max-w-7xl">
                            <div className="flex flex-row gap-x-4 gap-y-10 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 overflow-x-auto">
                                {dataProducts.length > 0 && dataProducts.slice(0, 8).map(product => {
                                    return (
                                        <ShoesCard product={product} key={product._id} />
                                    )
                                })}
                            </div>
                        </div>
                        :
                        <div className="flex justify-center items-center my-4">
                            <svg className="mt-18 mr-2 w-12 h-12 text-gray-800 animate-spin fill-highlightPrimary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                }
                <div className="flex flex-col relative justify-center items-center mt-12 md:mt-28 sm:mt-16">
                    <h3 className="mt-2 mb-2 md:mb-0 text-highlightSecondary font-bold text-xs px-16 text-center md:text-base md:px-56">
                        ❤ Loved by people
                    </h3>
                    <h1 className="text-white uppercase mb-14 sm:mb-12 md:mb-20 text-2xl mx-5 text-center leading-none md:text-4xl md:mx-40 relative">
                        Around the World
                    </h1>
                </div>
                {
                    loading
                        ?
                        <div className="mx-auto max-w-2xl lg:max-w-7xl">
                            <div className="grid grid-cols-1 gap-y-10 w-full overflow-hidden sm:grid-cols-2 gap-x-10 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-6">
                                {
                                    dataComments.length > 0 && dataComments.slice(0, 3).map(comment => {
                                        return (
                                            <CommentCard comment={comment} key={comment._id} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        <div className="flex justify-center items-center my-4">
                            <svg className="mt-18 mr-2 w-12 h-12 text-gray-800 animate-spin fill-highlightPrimary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                }
            </main>
            <Footer />
        </>
    )
}

export default HomePage