import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import NavBarLogged from "../components/NavBarLogged";
import Footer from '../components/Footer.js'
import { AiOutlineEye, AiFillEdit } from 'react-icons/ai'
import { FiDelete } from 'react-icons/fi'
import { AuthContext } from '../contexts/AuthContext';

const ProductsPage = () => {

    const { isLoading, loggedInUser } = useContext(AuthContext)

    const headers = {
        'Authorization': 'Bearer ' + loggedInUser.jwt
    }

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/my-products`, { headers })
            .then(response => {
                setData(response.data)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }, [isLoading])

    const deleteProduct = productId => {

        axios.delete(`${process.env.REACT_APP_API_URL}/my-products/${productId}`, { headers })
            .then(response => {
                alert("product deleted.")
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBarLogged />
            <div className="container max-w-screen-xl mx-auto px-5 py-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <h1 className="text-4xl text-highlightPrimary2 font-light uppercase">Your Shoes</h1>
                            <p className="text-white text-lg font-light py-5 mb-5">This are all your shoes registered in our system:</p>
                            <div className="relative mb-5 sm:w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-highlightPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input
                                    className="w-full p-4 pl-10 text-sm text-white rounded-lg bg-purple-500 bg-opacity-10 focus:outline-none placeholder:text-white placeholder:text-opacity-30"
                                    placeholder="Search by the Name..." />
                                <button
                                    className="text-white absolute right-2.5 bottom-3 bg-highlightPrimary focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1">Search
                                </button>
                            </div>
                            {
                                loading
                                    ?
                                    data.length
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
                                                    data.map((item) => {
                                                        return (
                                                            <tbody
                                                                key={item._id}
                                                                className="text-center text-lg border-b border-highlightPrimary2">
                                                                <tr className="text-white justify-center align-middle items-center">
                                                                    <img className="font-medium py-4 px-1 w-20 m-auto" alt="shoeImage" src={item.image} />
                                                                    <td>{item.brand}</td>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.size}</td>
                                                                    <td>{item.description}</td>
                                                                    <td>R$ {item.price}</td>
                                                                    <td className="text-2xl">
                                                                        <Link to={`/all-products/${item._id}`}>
                                                                            <button className="text-green-500">
                                                                                <AiOutlineEye />
                                                                            </button>
                                                                        </Link>
                                                                        <Link to={`/sell/${item._id}`}>
                                                                            <button
                                                                                className="px-2 text-yellow-300">
                                                                                <AiFillEdit />
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => deleteProduct(item._id)}>
                                                                            <FiDelete className="text-red-500" />
                                                                        </button>
                                                                    </td>
                                                                </tr>
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
                                                <Link to="/sell" className="bg-highlightPrimary text-white font-light rounded-lg px-6 py-2 mt-10 mb-3">Start Selling Now!</Link>
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
            </div>
            <Footer />
        </>
    )
}

export default ProductsPage
