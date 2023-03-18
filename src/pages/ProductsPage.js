import React from "react"
import { useEffect, useState, useContext } from "react"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from "../components/NavBar"
import Footer from '../components/Footer.js'
import { AuthContext } from '../contexts/AuthContext'
import toast, { Toaster } from 'react-hot-toast'

const ProductsPage = () => {

    const { isLoading, loggedInUser } = useContext(AuthContext)

    const headers = {
        'Authorization': 'Bearer ' + loggedInUser.jwt
    }

    const { productId } = useParams()

    const [dataProducts, setDataProducts] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/my-products`, { headers })
            .then(response => {
                setDataProducts(response.data)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }, [isLoading])

    const handleSearch = e => {
        const query = e.target.value
        axios.get(`${process.env.REACT_APP_API_URL}/all-sneakers/search?query=${query}`)
            .then(response => {
                setDataSearch(response.data)
            })
            .catch(err => console.log(err))
    }

    const deleteProduct = (productId, event) => {
        event.preventDefault()
        axios.delete(`${process.env.REACT_APP_API_URL}/my-products/${productId}`, { headers })
            .then(response => {
                toast('Product was Successfully Deleted!',
                    {
                        icon: '🗑️',
                        style: {
                            borderRadius: '30px',
                            background: '#5D36FF',
                            color: '#fff'
                        },
                    }
                )
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBar />
            <div className="container max-w-screen-xl mx-auto px-5 py-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <h1 className="text-4xl text-highlightPrimary2 font-light uppercase">Your Shoes</h1>
                        <p className="text-white text-opacity-50 text-lg font-light py-5 mb-5">This are all your shoes registered in our system:</p>
                        <form>
                            <div className="relative flex w-full flex-wrap items-stretch mb-5">
                                <input
                                    type="text"
                                    onChange={handleSearch}
                                    className="text-white md:w-full lg:w-full relative flex-auto border border-solid border-opacity-20 border-highlightPrimary2 bg-transparent py-2 pl-3 pr-12 outline-none focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-highlightPrimary placeholder:text-white placeholder:text-opacity-30"
                                    placeholder="Search..." />
                                <div
                                    className="input-group-text z-20 flex items-center whitespace-nowrap absolute right-1 top-1 rounded px-3 py-1.5 text-center text-base font-normal text-highlightPrimary"
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
                        {
                            loading
                                ?
                                dataProducts.length
                                    ?
                                    <form>
                                        <table className="min-w-full text-sm font-light">
                                            <thead className="border-b border-highlightPrimary2 bg-purple-500 bg-opacity-10 text-white font-medium text-lg">
                                                <tr className="text-center">
                                                    <th className="px-6 py-4">Image</th>
                                                    <th className="px-6 py-4">Brand</th>
                                                    <th className="px-6 py-4">Name</th>
                                                    <th className="px-6 py-4">Size</th>
                                                    <th className="px-6 py-4">Description</th>
                                                    <th className="px-6 py-4">Price</th>
                                                    <th className="px-6 py-4"></th>
                                                </tr>
                                            </thead>
                                            {
                                                dataSearch >= 0
                                                    ?
                                                    dataProducts.map((product) => {
                                                        return (
                                                            <tbody
                                                                key={product._id}
                                                                className="text-center text-lg border-b border-highlightPrimary2">
                                                                <tr className="text-white justify-center align-middle items-center">
                                                                    <img className="font-medium py-4 px-1 w-20 m-auto" alt="shoeImage" src={product.image} />
                                                                    <td className="font-bold uppercase">{product.brand}</td>
                                                                    <td className="uppercase">{product.name}</td>
                                                                    <td>{product.size}</td>
                                                                    <td className="text-gray-500">{product.description}</td>
                                                                    <td>R$ {product.price}</td>
                                                                    <td>
                                                                        <Link to={`/all-products/${product._id}`}>
                                                                            <button
                                                                                className="text-sm font-bold bg-bgLogin p-1 uppercase text-blue-600 hover:underline">
                                                                                view
                                                                            </button>
                                                                        </Link>
                                                                        <Link to={`/sell/${product._id}`}>
                                                                            <button
                                                                                className="text-sm font-bold bg-bgLogin p-1 mr-2 ml-2 uppercase text-yellow-400 hover:underline">
                                                                                edit
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={(event) => deleteProduct(product._id, event)}
                                                                            className="text-sm font-bold bg-bgLogin p-1 uppercase text-red-600 hover:underline">
                                                                            delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <Toaster
                                                                    position="top-center"
                                                                    reverseOrder={false}
                                                                />
                                                            </tbody>
                                                        )
                                                    })
                                                    :
                                                    dataSearch.map(product => {
                                                        return (
                                                            <tbody
                                                                key={product._id}
                                                                className="text-center text-lg border-b border-highlightPrimary2">
                                                                <tr className="text-white justify-center align-middle items-center">
                                                                    <img className="font-medium py-4 px-1 w-20 m-auto" alt="shoeImage" src={product.image} />
                                                                    <td className="font-bold uppercase">{product.brand}</td>
                                                                    <td className="uppercase">{product.name}</td>
                                                                    <td>{product.size}</td>
                                                                    <td className="text-gray-500">{product.description}</td>
                                                                    <td>R$ {product.price}</td>
                                                                    <td className="text-sm font-bold">
                                                                        <Link to={`/all-products/${product._id}`}>
                                                                            <button
                                                                                className="bg-bgLogin p-1 uppercase text-blue-600 hover:underline">
                                                                                view
                                                                            </button>
                                                                        </Link>
                                                                        <Link to={`/sell/${product._id}`}>
                                                                            <button
                                                                                className="bg-bgLogin p-1 mr-2 ml-2 uppercase text-yellow-400 hover:underline">
                                                                                edit
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={(event) => deleteProduct(product._id, event)}
                                                                            className="bg-bgLogin p-1 uppercase text-red-600 hover:underline">
                                                                            delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <Toaster
                                                                    position="top-center"
                                                                    reverseOrder={false}
                                                                />
                                                            </tbody>
                                                        )
                                                    })
                                            }
                                        </table>
                                    </form>
                                    :
                                    <div className="container max-w-screen-xl mx-auto px-5 py-8 mt-36">
                                        <div className="text-white text-center text-xl flex flex-col justify-center items-center">
                                            You do not have products registered on our website yet!
                                            <Link to="/sell" className="bg-highlightPrimary text-white font-light px-6 py-2 mt-10 mb-3">Start Selling Now!</Link>
                                        </div>
                                    </div>
                                :
                                <div className="flex justify-center items-center my-4">
                                    <svg className="mt-36 mr-2 w-12 h-12 text-gray-800 animate-spin fill-highlightPrimary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductsPage
