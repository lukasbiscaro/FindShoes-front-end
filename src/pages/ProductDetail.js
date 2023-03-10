import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FiShoppingCart } from 'react-icons/fi';

const ProductDetail = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`, {headers})
        .then(response => {
            setProduct(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    if(!product) {
        return <p>Loading...</p>
    }

    return (
        <>
            <NavBar />
            
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row p-4 min-h-max bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                    <div className="flex flex-col mr-6 md:w-96 pb-10">
                        <img src={product.image} alt="" className="w-full h-60 rounded-lg mb-4" />
                        <Link to={product._id} className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-3 px-3 py-2 rounded-xl">
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
                            {product.name}
                        </h4>
                        <div className='text-highlightPrimary2 text-xl font-bold'>
                            {product.price}
                        </div>
                        <p className="mt-6 mb-1 text-highlightPrimary2">Description</p>
                        <p className="text-white text-xs font-normal pb-10">
                            {product.description}
                        </p>
                    </div>
                </div>
                   
                
            </main>

            <Footer />
        </>
    )
}

export default ProductDetail