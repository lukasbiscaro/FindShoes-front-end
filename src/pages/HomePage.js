import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BsLightningCharge, BsStar } from 'react-icons/bs'

const HomePage = () => {
    return (
        <>
            <NavBar />
            
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-24">
                    <h1 className="font-bold text-white text-2xl mx-20 text-center leading-none md:text-7xl md:mx-56 relative">
                        <span className="absolute text-highlightPrimary left-0 top-0 z-50 rotate-45">
                            <BsStar size={30} />
                        </span>
                        Buy or trade the Best Shoes in the World
                        <span className="absolute text-highlightPrimary2 right-0 bottom-0 z-50 -rotate-45">
                            <BsStar size={30} />
                        </span>
                    </h1>
                    <h2 className="mt-2 text-textGray text-sm px-32 text-center leading-none md:text-xl md:px-56">
                        The largest digital marketplace for the best shoes
                    </h2>
                    <button src="" className="text-white mt-10 flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-8 py-4 rounded-xl">
                        <span className="mr-2">
                            <BsLightningCharge />
                        </span>
                        <span> EXPLORE THE COLLECTIONS</span>
                    </button>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default HomePage