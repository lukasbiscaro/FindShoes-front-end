import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import axios from 'axios';
import ShoesCard from "../components/ShoesCard";

const ExploreItems = () => {
    const [shoes, setShoes] = useState([])

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get('http://localhost:3001/', {headers})
        .then(response => {
            setShoes(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <NavBar />
             
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-6">
                    <h1 className="font-bold text-white text-center leading-none text-7xl mx-56 relative">
                        Explore All Items
                    </h1>
                </div>

                <div id="bestShoesCards">
                    <div className="mx-auto max-w-2xl py-2 px-4 sm:py-0 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            { shoes.length > 0 && shoes.map(singleShoes => {
                                return (
                                    <ShoesCard singleShoes={singleShoes} key={singleShoes._id} />
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