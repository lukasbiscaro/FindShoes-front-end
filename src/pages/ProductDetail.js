import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProductDetail = () => {

    const [dataProducts, setDataProducts] = useState([])
    const { productId } = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-products/${productId}`)
            .then(response => {
                setDataProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [productId])

    return (
        <>
            <NavBar />
            <div className="container max-w-screen-xl mx-auto px-5 py-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <h1 className="text-4xl mb-10 text-highlightPrimary2 font-light uppercase">Product Details</h1>
                            <div className="overflow-hidden bg-purple-500 bg-opacity-10 p-16">
                                <div className="container mx-auto">
                                    {
                                        dataProducts.length > 0 && dataProducts.map((product) => {
                                            return (
                                                <div
                                                    key={product._id}
                                                    className="w-full mx-auto flex flex-col lg:flex-row">
                                                    <div className='flex-col'>
                                                        <img
                                                            alt="shoe-img"
                                                            className="rounded-md"
                                                            src={product.image} />
                                                        <div className='flex gap-x-4 mt-4 overflow-auto'>
                                                            <img
                                                                alt="shoe-img"
                                                                className="h-20 rounded-md"
                                                                src={product.image} />
                                                            <img
                                                                alt="shoe-img"
                                                                className="h-20 rounded-md"
                                                                src={product.image} />
                                                            <img
                                                                alt="shoe-img"
                                                                className="h-20 rounded-md"
                                                                src={product.image} />
                                                        </div>
                                                    </div>
                                                    <div className="w-full flex flex-col justify-evenly mt-12 md:mt-12 lg:mt-0 lg:pl-20">
                                                        <div>
                                                            <div>
                                                                <h2 className="text-highlightPrimary text-sm font-bold uppercase tracking-widest mb-1">{product.brand}</h2>
                                                                <h1 className="text-white text-3xl font-bold uppercase lg:text-2xl">{product.name}</h1>
                                                            </div>
                                                            <div className='mt-5 space-y-4 mb-10 md:mb-10 lg:mb-0'>
                                                                <p className='text-md text-white text-opacity-50'>{product.description}</p>
                                                                <p className='text-xl text-white uppercase lg:text-lg'>Size: <spa>{product.size}</spa></p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full mt-6">
                                                            <div className="flex border-b-2 border-gray-200"></div>
                                                            <div className="flex-col text-center mt-4 lg:flex-row">
                                                                <span className="font-light text-xl text-white">R$ {product.price}</span>
                                                                <button className="w-full mt-4 p-3 text-white bg-highlightPrimary  tracking-tight lg:mb-20 xl:mb-20">BUY NOW</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail