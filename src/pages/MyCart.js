import React from 'react'
import NavBarLogged from '../components/NavBarLogged'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const myCart = () => {
    return (
        <>
            <NavBarLogged />

            <div className="container max-w-screen-xl mx-auto px-5 py-8 mt-36">
                <div className="text-white text-center text-xl flex flex-col justify-center items-center uppercase">
                    Page Under Development
                    <Link to="/" className="bg-highlightPrimary text-white font-light px-6 py-2 mt-10 mb-3 capitalize">Go Home</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default myCart