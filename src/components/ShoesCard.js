import React from 'react'
import { Link } from 'react-router-dom'

const ShoesCard = ({ product }) => {
    return (
        <>
            <div className="p-4 group relative bg-bgLogin bg-opacity-50">
                <img
                    src={product.image}
                    alt="shoe-img"
                    className="w-full object-cover object-center lg:h-48 h-48" />
                <h5 className='text-white text-opacity-50 text-xs font-light mt-5'>
                    {product.brand}
                </h5>
                <h4 className='text-white text-md font-light'>
                    {product.name}
                </h4>
                <div className='flex flex-row justify-between items-center mt-5'>
                    <Link
                        to={`/all-products/${product._id}`}
                        className="text-white text-opacity-50 hover:text-opacity-100 w-full transition-all duration-500 ease-in-out group inline-flex items-center justify-center py-2 px-6 text-sm font-bold border-b-4 border-highlightPrimary bg-highlightPrimary bg-opacity-20 uppercase">
                        <span>
                            view product
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ShoesCard


