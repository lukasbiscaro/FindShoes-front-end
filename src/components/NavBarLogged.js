import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { Menu, Transition } from '@headlessui/react'
import { AuthContext } from '../contexts/AuthContext'

const NavBarLogged = () => {
    const { logout } = useContext(AuthContext)

    return (
        <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link to={'/'}>
                            <div className="text-white text-sm">
                                <h1 className="font-bold text-xl">Find<span className="font-light">Shoes</span></h1>
                                <h2 className="font-light tracking-widest uppercase text-xs sm:text-xs">Marketplace</h2>
                            </div>
                        </Link>
                        <div className="hidden md:flex md:gap-x-6">
                            <Link className="inline-block py-1 px-2 text-sm text-white hover:border-b-2 hover:border-highlightPrimary2 hover:text-highlightPrimary2 uppercase" to="/all-sneakers">all Sneakers</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 md:gap-x-3">
                        <div className="md:flex md:gap-x-3">
                            <Link
                                className="transition-all duration-500 ease-in-out group inline-flex items-center justify-center py-2 px-6 text-sm font-bold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-highlightPrimary bg-highlightPrimary text-white hover:text-black uppercase hover:font-bold md:px-6" to='/my-cart'>
                                <FiShoppingCart className='text-lg' />
                            </Link>
                        </div>
                        <Menu as="div" className="relative">
                            <div>
                                <Menu.Button
                                    className="transition-all duration-500 ease-in-out group inline-flex items-center justify-center py-2 px-6 text-sm font-bold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 text-white hover:text-black hover:bg-highlightPrimary uppercase md:px-2">
                                    <span className="sr-only">Open user menu</span>
                                    <span className="h-5 flex flex-col justify-center">
                                        <FiUser size="30" />
                                    </span>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-5 w-48 origin-top-right bg-bgLogin shadow-md shadow-black">
                                    <Menu.Item>
                                        <>
                                            <ul>
                                                <a
                                                    href='/'
                                                    className='flex px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary hover:text-white cursor-pointer md:border-b-2 md:border-highlightPrimary'
                                                >
                                                    Home
                                                </a>
                                            </ul>
                                            <ul className='md:hidden'>
                                                <a
                                                    href='/all-sneakers'
                                                    className='flex px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary hover:text-white cursor-pointer border-b-2 border-highlightPrimary'
                                                >
                                                    All Sneakers
                                                </a>
                                            </ul>
                                            <ul>
                                                <a
                                                    href='/my-profile'
                                                    className='flex px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary hover:text-white cursor-pointer'
                                                >
                                                    Profile
                                                </a>
                                            </ul>
                                            <ul>
                                                <a
                                                    href='/my-products'
                                                    className='flex px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary hover:text-white cursor-pointer'
                                                >
                                                    Products
                                                </a>
                                            </ul>
                                            <ul>
                                                <a
                                                    href='/sell'
                                                    className='flex px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary hover:text-white cursor-pointer'
                                                >
                                                    Sell Product
                                                </a>
                                            </ul>
                                            <ul>
                                                <a
                                                    href='/my-comment'
                                                    className='flex px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary hover:text-white cursor-pointer'
                                                >
                                                    Feedback
                                                </a>
                                            </ul>
                                            <ul>
                                                <a
                                                    href='/login'
                                                    onClick={() => logout()}
                                                    className='uppercase flex px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary hover:text-white cursor-pointer'
                                                >
                                                    Exit
                                                </a>
                                            </ul>
                                        </>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBarLogged