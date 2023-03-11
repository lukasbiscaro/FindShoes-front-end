import React, { useState, useContext } from "react";
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext';
import NavBarLogged from "../components/NavBarLogged"
import Footer from '../components/Footer.js'
import { FaLock } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';

const SellPage = () => {

    const { loggedInUser } = useContext(AuthContext)

    const headers = {
        'Authorization': 'Bearer ' + loggedInUser.jwt
    }

    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [refresh, setRefresh] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        const newProduct = {
            image,
            brand,
            name,
            size,
            description,
            price
        }

        axios.post(`${process.env.REACT_APP_API_URL}/sell`, newProduct, { headers })
            .then(response => {
                console.log(response.data)
                toast.success('Product Successfully Added!',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#5D36FF',
                            color: '#fff',
                        }
                    })
                setImage('')
                setBrand('')
                setName('')
                setSize('')
                setDescription('')
                setPrice('')
                setRefresh(!refresh)

            })
            .catch(err => console.log(err))
    }

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('shoeImage', e.target.files[0])
        axios.post(`${process.env.REACT_APP_API_URL}/upload`, uploadData, { headers })
            .then(response => {
                setImage(response.data.url)
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
                            <h1 className="text-4xl text-highlightPrimary2 font-light uppercase">Sell Them</h1>
                            <p className="text-white text-lg font-light py-5 mb-5"><span className="font-light text-red-600">REMEMBERING!</span> The sale of fake products is prohibited.</p>
                            <div className="flex flex-col text-white">
                                <form onSubmit={e => handleSubmit(e)}>
                                    <div className="text-lg text-highlightPrimary2 mb-5 mt-5">
                                        Image of the Product:
                                    </div>
                                    <input
                                        type="file"
                                        onChange={e => handleUpload(e)}
                                        className="mt-5 mb-5 block w-full text-sm p-2 text-gray-600 rounded-lg cursor-pointer bg-bgLogin focus:outline-none file:" />
                                    <div>
                                        <div className="text-lg text-highlightPrimary2">Name:</div>
                                        <input
                                            type='text'
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600"
                                            placeholder="Enter the name of the product..." />
                                    </div>
                                    <div>
                                        <div className="text-lg text-highlightPrimary2 mt-5">Brand:</div>
                                        <input
                                            type='text'
                                            value={brand}
                                            onChange={e => setBrand(e.target.value)}
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600"
                                            placeholder="Enter the name of the product..." />
                                    </div>
                                    <div>
                                        <div className="text-lg text-highlightPrimary2 mt-5">Size:</div>
                                        <input
                                            type='number'
                                            value={size}
                                            onChange={e => setSize(e.target.value)}
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600"
                                            placeholder="Enter the size of the product..." />
                                    </div>
                                    <div>
                                        <div className="text-lg text-highlightPrimary2 mt-5">Leave a the description about your product:</div>
                                        <textarea
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                            rows="6"
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600"
                                            placeholder="Size, Condition, Condition of the box..."></textarea>
                                        <div>
                                        </div>
                                        <div>
                                            <div className="text-lg text-highlightPrimary2 mt-5">
                                                Price:
                                            </div>
                                            <div className="relative mt-2 rounded-md shadow-sm">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <span className="text-highlightPrimary2 sm:text-sm">$</span>
                                                </div>
                                                <input
                                                    value={price}
                                                    onChange={e => setPrice(e.target.value)}
                                                    className="mt-4 focus:ring-1 pl-7 pr-20 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600"
                                                    placeholder="0.00"
                                                />
                                            </div>
                                            <button
                                                type='submit'
                                                className="w-full flex items-center justify-center gap-3 self-center bg-highlightPrimary text-white font-light rounded-lg px-6 py-2 mt-10 mb-3">
                                                <FaLock className="text-black" />Save
                                            </button>
                                            <Toaster
                                                position="bottom-center"
                                                reverseOrder={false}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SellPage
