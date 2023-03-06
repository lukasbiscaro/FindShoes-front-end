import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FiShoppingCart } from 'react-icons/fi';

import item1 from '../images/bg.png';

const myCart = () => {
    return (
        <>
            <NavBar />
            
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-6 mb-6">
                    <h1 className="font-bold text-white text-center leading-none text-7xl mx-56 relative">
                        My Cart
                    </h1>
                </div> 

                <div className="flex flex-col sm:flex-row p-4 min-h-max bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                    <div className="flex flex-col mr-6 md:w-60 pb-10">
                        <img src={item1} alt="" className="w-full h-48 rounded-lg mb-4" />
                    </div>
                    <div className="flex flex-col mr-6 md:w-96 pb-10">
                        <p className="text-gray-400 text-xs font-bold">
                            Collection
                        </p>
                        <h4 className='text-white text-2xl font-bold'>
                            Name of the item
                        </h4>
                        <div className='text-highlightPrimary2 text-xl font-bold'>
                            R$ 200,00
                        </div>
                        <div className="mt-10">
                            <select name="quantity" autocomplete="off" data-a-native-class="sc-update-quantity-select " data-a-touch-header="Quantidade" id="quantity" tabindex="0" data-action="a-dropdown-select" class="a-native-dropdown a-declarative sc-update-quantity-select">
                                <option value="0" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="0 (Excluir)">0 (Excluir)</option>
                                <option value="1" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="1" selected="">1</option>
                                <option value="2" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="2">2</option>
                                <option value="3" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="3">3</option>
                                <option value="4" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="4">4</option>
                                <option value="5" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="5">5</option>
                                <option value="6" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="6">6</option>
                                <option value="7" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="7">7</option>
                                <option value="8" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="8">8</option>
                                <option value="9" class="sc-update-quantity-option" data-a-css-class="quantity-option" data-a-html-content="9">9</option>
                                <option value="10" class="sc-update-quantity-option" data-a-css-class="quantity-option  quantity-option-10" data-a-html-content="10+">10+</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col mr-6 md:w-96 pb-10">

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default myCart