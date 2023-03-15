import React, { useEffect, useState } from 'react';
import NavBarLogged from '../components/NavBarLogged';
import Footer from '../components/Footer';
import axios from 'axios';
import ShoesCard from "../components/ShoesCard";

const ExploreItems = () => {
    const [dataProducts, setDataProducts] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-products`)
            .then(response => {
                setDataProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <NavBarLogged />
            <main className="container max-w-screen-xl mx-auto px-5 py-8">
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <h1 className="text-3xl md:text-4xl text-highlightPrimary2 font-light uppercase">
                            Explore All Items
                        </h1>
                    </div>
                </div>
                <div id="bestShoesCards">
                    <div className="mx-auto max-w-2xl py-2 sm:py-0 lg:max-w-7xl">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {dataProducts.length > 0 && dataProducts.map(product => {
                                return (
                                    <ShoesCard product={product} key={product._id} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ExploreItems