import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CollectionsCard from "../components/CollectionsCard"

const HomePage = () => {
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
            <NavBar />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-6">
                    <h1 className="font-bold text-white text-center leading-none text-7xl mx-56 relative mb-4">
                        Collections
                    </h1>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {dataProducts.length > 0 && dataProducts.map(brand => {
                            return (
                                <CollectionsCard brand={brand} key={brand._id} />
                            )
                        })}
                    </div>
                </div>

            </main>

            <Footer />
        </>
    )
}

export default HomePage