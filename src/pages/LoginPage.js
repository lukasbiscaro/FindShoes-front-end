import bgImage from '../images/BgLoginPage.png'
import React, { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className="min-h-screen relative flex justify-center md:px-12 lg:px-0">
                <div className="relative z-10 flex flex-1 flex-col bg-bgPrimary py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
                    <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                        <div className="flex flex-col">
                            <Link to='/'>
                                <div className='text-white flex text-3xl'>
                                    <div className='font-bold'>Find</div>
                                    <div>Shoes</div>
                                </div>
                                <div className='text-white'>M A R K E T P L A C E</div>
                            </Link>

                            <div className="mt-20">
                                <h2 className="text-lg font-semibold text-white">Please login to your account</h2>
                                <p className="mt-2 text-sm text-textGray">Don’t have an account? <a className="font-medium text-highlightPrimary2 hover:underline" href="/sign-up">Sign Up</a></p>
                            </div>
                        </div>
                        <form className="mt-10 grid grid-cols-1 gap-y-8 relative">
                            <div>
                                <label className="mb-3 block text-sm font-medium text-highlightPrimary2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm" />
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-highlightPrimary2">Password</label>
                                <input
                                    type={(open === false) ? 'password' : 'text'}
                                    required
                                    className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm" />
                            </div>
                            <div className='text-3xl absolute mt-2 top-32 right-3 cursor-pointer'>
                                {
                                    (open === false) ? <BiHide onClick={toggle} /> : <BiShow onClick={toggle} />
                                }
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <div className="flex h-5 items-center">
                                        <input type="checkbox" className="h-4 w-4 cursor-pointer accent-highlightPrimary" />
                                    </div>
                                    <div className="text-xs text-textGray">Remember Me</div>
                                </div>
                            </div>
                            <div>
                                <button className="group relative h-10 w-40 overflow-hidden rounded-md text-lg shadow">
                                    <div className="absolute inset-0 w-2 bg-highlightPrimary2 transition-all duration-[500ms] ease-out group-hover:w-full"></div>
                                    <span className="text-highlightPrimary2 relative group-hover:text-textBlack">Sign In →</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
                    <img
                        alt="bgImage" src={bgImage}
                        width="1664" height="1866"
                        className="absolute inset-0 h-full w-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default LoginPage