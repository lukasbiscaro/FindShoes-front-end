import React, { useEffect, useState } from 'react';
import NavBarLogged from '../components/NavBarLogged';
import Footer from '../components/Footer';
import axios from 'axios';
import ShoesCard from "../components/ShoesCard";

const ExploreItems = () => {
    const [dataProducts, setDataProducts] = useState([])
    const [dataSearch, setDataSearch] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-products`)
            .then(response => {
                setDataProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSearch = e => {
        const query = e.target.value
        axios.get(`${process.env.REACT_APP_API_URL}/exploreItems/search?query=${query}`)
            .then(response => {
                setDataSearch(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBarLogged />

            <main className="container max-w-screen-xl mx-auto px-5 py-8">
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <h1 className="text-3xl md:text-4xl text-highlightPrimary2 font-light uppercase mb-10">
                            Explore All Items
                        </h1>
                        <form>
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <input
                                    type="text"
                                    onChange={handleSearch}
                                    className="text-white md:w-full lg:w-full relative flex-auto border border-solid border-opacity-20 border-highlightPrimary2 bg-transparent py-2 pl-3 pr-12 outline-none focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-highlightPrimary placeholder:text-white placeholder:text-opacity-30"
                                    placeholder="Search..." />
                                <div
                                    type="submit"
                                    className="input-group-text z-50 flex items-center whitespace-nowrap absolute right-1 top-1 rounded px-3 py-1.5 text-center text-base font-normal text-highlightPrimary"
                                    id="basic-addon2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5 text-highlightPrimary">
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="bestShoesCards">
                    <div className="mx-auto max-w-2xl py-2 sm:py-0 lg:max-w-7xl">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {dataSearch >= 0
                                ? dataProducts.map(product => {
                                    return (
                                        <ShoesCard product={product} key={product._id} />
                                    )
                                })
                                :
                                dataSearch.map(product => {
                                    return (
                                        <ShoesCard product={product} key={product._id} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ExploreItems