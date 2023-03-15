import item1 from '../images/bg.png';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBarLogged from '../components/NavBarLogged';
import Footer from '../components/Footer';
import { FaApplePay } from 'react-icons/fa';

const myCart = () => {
    return (
        <>
            <NavBarLogged />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col relative justify-center items-center mt-6 sm:mt-6 mb-6">
                    <h1 className="font-bold text-white text-center leading-none text-7xl mx-56 relative">
                        My Cart
                    </h1>
                </div>
                <div className="flex flex-col items-center sm:flex-row p-4 min-h-max bg-highlightPrimary bg-opacity-20 rounded-lg border-highlightPrimary2 border-2 border-opacity-10">
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row mb-6'>
                            <div className="flex flex-col mr-6 sm:w-60 w-full mb-4 sm:mb-0">
                                <img src={item1} alt="" className="w-full h-48 rounded-lg" />
                            </div>
                            <div className="flex flex-col mr-6 md:w-96">
                                <p className="text-gray-400 text-xs font-bold">
                                    Collection
                                </p>
                                <h4 className='text-white text-2xl font-bold'>
                                    Name of the item
                                </h4>
                                <div className="mt-6">
                                    <label for="quantity" className='text-white mr-2'>
                                        Quantity:
                                    </label>
                                    <select name="quantity" autocomplete="off" data-a-native-classname="sc-update-quantity-select " data-a-touch-header="Quantidade" id="quantity" tabindex="0" data-action="a-dropdown-select" className="a-native-dropdown a-declarative sc-update-quantity-select p-1 rounded-lg">
                                        <option value="0" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="0 (Excluir)">0 (Excluir)</option>
                                        <option value="1" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="1" selected="">1</option>
                                        <option value="2" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="2">2</option>
                                        <option value="3" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="3">3</option>
                                        <option value="4" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="4">4</option>
                                        <option value="5" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="5">5</option>
                                        <option value="6" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="6">6</option>
                                        <option value="7" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="7">7</option>
                                        <option value="8" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="8">8</option>
                                        <option value="9" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="9">9</option>
                                        <option value="10" classname="sc-update-quantity-option" data-a-css-classname="quantity-option  quantity-option-10" data-a-html-content="10+">10+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-end md:w-96">
                                <div className='text-highlightPrimary2 text-3xl font-bold'>
                                    R$ 200,00
                                </div>
                                <span className='text-xs text-highlightPrimary2 mb-4'>
                                    Em até 10x de R$ 20,00
                                </span>
                                <Link to='/' className="text-white text-xs hover:text-highlightPrimary2 underline">
                                    Delete item(s) from your cart
                                </Link>
                            </div>
                        </div>

                        <div className='flex flex-row mb-6'>
                            <div className="flex flex-col mr-6 sm:w-60 w-full mb-4 sm:mb-0">
                                <img src={item1} alt="" className="w-full h-48 rounded-lg" />
                            </div>
                            <div className="flex flex-col mr-6 md:w-96">
                                <p className="text-gray-400 text-xs font-bold">
                                    Collection
                                </p>
                                <h4 className='text-white text-2xl font-bold'>
                                    Name of the item
                                </h4>
                                <div className="mt-6">
                                    <label for="quantity" className='text-white mr-2'>
                                        Quantity:
                                    </label>
                                    <select name="quantity" autocomplete="off" data-a-native-classname="sc-update-quantity-select " data-a-touch-header="Quantidade" id="quantity" tabindex="0" data-action="a-dropdown-select" className="a-native-dropdown a-declarative sc-update-quantity-select p-1 rounded-lg">
                                        <option value="0" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="0 (Excluir)">0 (Excluir)</option>
                                        <option value="1" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="1" selected="">1</option>
                                        <option value="2" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="2">2</option>
                                        <option value="3" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="3">3</option>
                                        <option value="4" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="4">4</option>
                                        <option value="5" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="5">5</option>
                                        <option value="6" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="6">6</option>
                                        <option value="7" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="7">7</option>
                                        <option value="8" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="8">8</option>
                                        <option value="9" classname="sc-update-quantity-option" data-a-css-classname="quantity-option" data-a-html-content="9">9</option>
                                        <option value="10" classname="sc-update-quantity-option" data-a-css-classname="quantity-option  quantity-option-10" data-a-html-content="10+">10+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-end md:w-96">
                                <div className='text-highlightPrimary2 text-3xl font-bold'>
                                    R$ 200,00
                                </div>
                                <span className='text-xs text-highlightPrimary2 mb-4'>
                                    Em até 10x de R$ 20,00
                                </span>
                                <Link to='/' className="text-white text-xs hover:text-highlightPrimary2 underline">
                                    Delete item(s) from your cart
                                </Link>
                            </div>
                        </div>

                        <div className='bg-highlightPrimary2 h-px opacity-20'></div>

                        <div className='flex flex-col justify-end items-end py-6 text-white font-bold'>
                            <span className="text-3xl font-bold text-white">
                                Subtotal
                            </span>
                            <span className="text-highlightPrimary2 text-3xl font-bold">
                                R$ 400,00
                            </span>
                            <span className='text-xs text-highlightPrimary2'>
                                Em até 10x de R$ 40,00
                            </span>
                        </div>

                        <div className='bg-highlightPrimary2 h-px opacity-20'></div>

                        <div className='flex flex-row justify-end items-center py-6 text-white font-bold'>
                            <Link to='/' className="text-white text-xs mr-6 hover:text-highlightPrimary2 underline">
                                Delete all
                            </Link>
                            <Link to='/' className="text-white flex justify-center items-center bg-highlightPrimary hover:bg-highlightPrimary2 px-6 py-1 rounded-xl">
                                <FaApplePay size={30} />
                            </Link>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default myCart