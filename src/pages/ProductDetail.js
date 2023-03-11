import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FiShoppingCart } from 'react-icons/fi';

const ProductDetail = () => {

    const [dataProducts, setDataProducts] = useState([])

    const { productId } = useParams()

    console.log(dataProducts)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-products/${productId}`)
            .then(response => {
                console.log(response.data)
                setDataProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    if (!dataProducts) {
        return <p>Loading...</p>
    }

    return (
        <>
            <NavBar />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row p-4 min-h-max bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                    <div className="flex flex-col mr-6 md:w-96 pb-10">
                        <img src={dataProducts.image} alt="" className="w-full h-60 rounded-lg mb-4" />
                        <Link to={dataProducts} className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
                            <span className="mr-2">
                                <FiShoppingCart />
                            </span>
                            <span className="text-xs font-regular"> Shop</span>
                        </Link>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-400 text-xs font-bold">
                            Collection
                        </p>
                        <h4 className='text-white text-2xl font-bold'>
                            {dataProducts.name}
                        </h4>
                        <div className='text-highlightPrimary2 text-xl font-bold'>
                            {dataProducts.price}
                        </div>
                        <p className="mt-6 mb-1 text-highlightPrimary2">Description</p>
                        <p className="text-white text-xs font-normal pb-10">
                            {dataProducts.description}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ProductDetail