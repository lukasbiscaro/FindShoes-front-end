import React from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi'

export default function NavBar() {
    return (
        <>
            {/* NOT LOGGED */}
            <header className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav className="relative z-50 flex justify-between">
                        <div className="flex items-center md:gap-x-12">
                            <a aria-label="Home" href="/">
                                <div className="text-white hover:text-highlightPrimary2">
                                    <h1 className="font-bold text-xl">Find<span className="font-light">Shoes</span></h1>
                                    <h2 className="font-light tracking-widest uppercase text-xs">Marketplace</h2>
                                </div>
                            </a>
                            <div className="hidden md:flex md:gap-x-6">
                                <a className="inline-block py-1 px-2 text-sm text-white hover:border-b-2 hover:border-b-highlightPrimary2 hover:text-highlightPrimary2" href="/collections">Collections</a>
                                <a className="inline-block py-1 px-2 text-sm text-white hover:border-b-2 hover:border-highlightPrimary2 hover:text-highlightPrimary2" href="/exploreItems">Explore Items</a>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-x-3 md:gap-x-3">
                            <div class="hidden md:flex">
                                <form name="search" action="#" method="post">
                                    <div class="relative flex w-full flex-wrap items-stretch">
                                        <input
                                            type="search"
                                            class="relative m-0 block w-[1%] min-w-0 w-52 flex-auto rounded-xl border border-solid border-highlightPrimary2 bg-transparent bg-clip-padding py-2 pl-3 pr-12 leading-2 text-base font-normal text-highlightPrimary2 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-highlightPrimary2 focus:shadow-te-primary focus:outline-none placeholder-highlightPrimary2"
                                            placeholder="Search..."
                                            aria-label="Search"
                                            aria-describedby="button-addon2" />
                                        <button
                                            type="submit"
                                            class="input-group-text z-50 flex items-center whitespace-nowrap absolute right-1 top-1 rounded px-3 py-1.5 text-center text-base font-normal text-highlightPrimary2 dark:text-highlightPrimary2"
                                            id="basic-addon2">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="h-5 w-5 text-highlightPrimary2">
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                         
                            <div className="hidden md:flex md:gap-x-3">
                                <a className="group inline-flex items-center justify-center rounded-xl py-2 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-highlightPrimary2 text-highlightPrimary2 hover:text-slate-100 hover:bg-highlightPrimary2 active:bg-highlightPrimary2 active:text-blue-100 focus-visible:outline-highlightPrimary2" href="/login">
                                    <span>Sign in</span>
                                </a>
                                <a className="group inline-flex items-center justify-center rounded-xl py-2 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-highlightPrimary bg-highlightPrimary text-white hover:text-slate-100 hover:bg-highlightPrimary2 hover:border-highlightPrimary2 active:bg-highlightPrimary2 active:text-blue-100 focus-visible:outline-highlightPrimary2" href="/sign-up">
                                    <span>Sign up</span>
                                </a>
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

            {/* LOGGED HEADER */}

            <header className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav className="relative z-50 flex justify-between">
                        <div className="flex items-center md:gap-x-12">
                            <a aria-label="Home" href="/">
                                <div className="text-white hover:text-highlightPrimary2">
                                    <h1 className="font-bold text-xl">Find<span className="font-light">Shoes</span></h1>
                                    <h2 className="font-light tracking-widest uppercase text-xs">Marketplace</h2>
                                </div>
                            </a>
                            <div className="hidden md:flex md:gap-x-6">
                                <a className="inline-block py-1 px-2 text-sm text-white hover:border-b-2 hover:border-b-highlightPrimary2 hover:text-highlightPrimary2" href="/collections">Collections</a>
                                <a className="inline-block py-1 px-2 text-sm text-white hover:border-b-2 hover:border-highlightPrimary2 hover:text-highlightPrimary2" href="/exploreItems">Explore Items</a>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-x-3 md:gap-x-3">
                            <div class="hidden md:flex">
                                <form name="search" action="#" method="post">
                                    <div class="relative flex w-full flex-wrap items-stretch">
                                        <input
                                            type="search"
                                            class="relative m-0 block w-[1%] min-w-0 w-52 flex-auto rounded-xl border border-solid border-highlightPrimary2 bg-transparent bg-clip-padding py-2 pl-3 pr-12 leading-2 text-base font-normal text-highlightPrimary2 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-highlightPrimary2 focus:shadow-te-primary focus:outline-none placeholder-highlightPrimary2"
                                            placeholder="Search..."
                                            aria-label="Search"
                                            aria-describedby="button-addon2" />
                                        <button
                                            type="submit"
                                            class="input-group-text z-50 flex items-center whitespace-nowrap absolute right-1 top-1 rounded px-3 py-1.5 text-center text-base font-normal text-highlightPrimary2 dark:text-highlightPrimary2"
                                            id="basic-addon2">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            class="h-5 w-5 text-highlightPrimary2">
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                         
                            <div className="hidden md:flex md:gap-x-3">
                                <a id="myCart" className="group inline-flex items-center justify-center rounded-xl py-2 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-highlightPrimary bg-highlightPrimary text-white hover:text-slate-100 hover:bg-highlightPrimary2 hover:border-highlightPrimary2 active:bg-highlightPrimary2 active:text-blue-100 focus-visible:outline-highlightPrimary2" href="/my-cart">
                                    <span className="mr-2">
                                        <FiShoppingCart />
                                    </span>
                                    <span> My Cart (0)</span>
                                </a>
                                <a className="group inline-flex items-center justify-center rounded-xl py-2 leading-6 px-3 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-highlightPrimary2 text-highlightPrimary2 hover:text-slate-100 hover:bg-highlightPrimary2 active:bg-highlightPrimary2 active:text-blue-100 focus-visible:outline-highlightPrimary2" href="/profile">
                                    <span className="h-5 flex flex-col justify-center"><FiUser /></span>
                                </a>
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
        </>
    )
}
