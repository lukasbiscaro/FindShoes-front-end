import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { userNavigation } from '../db/profileNav';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { Menu, Transition } from '@headlessui/react';

const NavBarLogged = () => {
    const navigate = useNavigate()

    const logOut = e => {
        e.preventDefault()
        localStorage.clear()
        navigate('/login')
    }

    return (
        <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <Link to={'/'}>
                            <div className="text-white">
                                <h1 className="font-bold text-sm sm:text-xl">Find<span className="font-light">Shoes</span></h1>
                                <h2 className="font-light tracking-widest uppercase text-xs sm:text-xs">Marketplace</h2>
                            </div>
                        </Link>
                        <div className="hidden md:flex md:gap-x-6">
                            <Link className="inline-block py-1 px-2 text-sm text-white hover:border-b-2 hover:border-highlightPrimary2 hover:text-highlightPrimary2 uppercase" to={'exploreItems'}>Explore Items</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 md:gap-x-3">
                        <div className="hidden md:flex">
                        </div>
                        <div className="hidden md:flex md:gap-x-3">
                            <Link
                                className="transition-all duration-500 ease-in-out group inline-flex items-center justify-center py-2 px-6 text-sm font-bold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-highlightPrimary bg-highlightPrimary text-white hover:text-black uppercase hover:font-bold md:px-6" to={'myCart'}>
                                <FiShoppingCart className='text-lg' />
                            </Link>

                            <Menu as="div" className="relative">
                                <div>
                                    <Menu.Button
                                        className="transition-all duration-500 ease-in-out group inline-flex items-center justify-center py-2 px-6 text-sm font-bold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-highlightPrimary text-white hover:text-black hover:bg-highlightPrimary uppercase md:px-6">
                                        <span className="sr-only">Open user menu</span>
                                        <span className="h-5 flex flex-col justify-center"><FiUser /></span>
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.id}>
                                                {({ active }) => (
                                                    <>
                                                        <Link
                                                            to={item.to}
                                                            onClick={item.click}
                                                            className='flex rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-highlightPrimary2 hover:text-black cursor-pointer'
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </>

                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                        <div className="-mr-1 md:hidden">
                            <div data-headlessui-state="">
                                <button className="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none" aria-label="Toggle Navigation" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R3p6:">
                                    <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-white" fill="none" strokeWidth="2" strokeLinecap="round">
                                        <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition"></path>
                                        <path d="M2 2L12 12M12 2L2 12" className="origin-center transition scale-90 opacity-0"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBarLogged