import bgImage from '../images/BgLoginPage.png'
import React, { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

const LoginPage = () => {

    const schemaLogin = yup.object().shape({
        email: yup.string().required("Please, enter a valid email address."),
        password: yup.string().required("Please, enter a password."),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaLogin)
    })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const defSubmit = () => {

        const user = {
            email,
            password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, user)
            .then(response => {
                localStorage.setItem('token', response.data.jwt)
                setEmail('')
                setPassword('')
                alert("User logged")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="min-h-screen relative flex justify-center md:px-12 lg:px-0">
                <div className="relative z-10 flex flex-1 flex-col bg-bgPrimary py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
                    <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                        <div className="flex flex-col">
                            <Link to='/'>
                                <a aria-label="Home" href="/">
                                    <div className="text-white hover:text-highlightPrimary2">
                                        <h1 className="font-bold text-3xl">Find<span className="font-light">Shoes</span></h1>
                                        <h2 className="font-light tracking-widest uppercase text-lg">Marketplace</h2>
                                    </div>
                                </a>
                            </Link>
                            <div className="mt-20">
                                <h2 className="text-lg font-semibold text-white">Please login to your account</h2>
                                <p className="mt-2 text-sm text-textGray">Don’t have an account? <a className="font-medium text-highlightPrimary2 hover:underline" href="/sign-up">Sign Up</a></p>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit(defSubmit)}
                            className="mt-10 grid grid-cols-1 gap-y-8 relative">
                            <div>
                                <label className="mb-3 block text-sm font-medium text-highlightPrimary2">Email</label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm"
                                />
                                <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                    <p className='ml-1'>{errors.email?.message}</p>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-highlightPrimary2">Password</label>
                                <input
                                    {...register("password")}
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm"
                                />
                                <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                    <p className='ml-1'>{errors.password?.message}</p>
                                </div>
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