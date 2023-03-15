import bgImage from '../images/BgLoginPage.png'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const SignUpPage = () => {

    const schemaSign = yup.object().shape({
        firstName: yup.string().required("First Name is required!"),
        lastName: yup.string().required("Last Name is required!"),
        email: yup.string().email("Email must be a valid email (@example.com)").required("Email is required!"),
        password: yup.string().min(8, "Password must be at least 8 characters!").max(20, "Password must be at most 20 characters!").required("Password must be at least 8 characters!"),
        confirmPassword: yup.string().oneOf([yup.ref("password",), null], "Passwords don't match!").required("Confirm Password is required!")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSign)
    })

    const navigate = useNavigate()

    const defSubmit = (data) => {

        const newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, newUser)
            .then(response => {
                if (response.status === 201) {
                    alert('User Created')
                    navigate('/login')
                }
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
                                <div className="text-white">
                                    <h1 className="font-bold text-3xl">Find<span className="font-light">Shoes</span></h1>
                                    <h2 className="font-light tracking-widest uppercase text-lg">Marketplace</h2>
                                </div>
                            </Link>
                            <div className="mt-20">
                                <h2 className="text-lg font-semibold text-white">Be part of one of the biggest marketplaces in the sneaker world!</h2>
                                <p className="mt-2 text-sm text-textGray">Already have an account? <Link className="font-medium text-highlightPrimary hover:underline" to={"/login"}>Sign In</Link></p>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit(defSubmit)}
                            className="mt-10 grid grid-cols-1 gap-y-8 relative">
                            <div className='flex gap-x-8'>
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-highlightPrimary">First Name</label>
                                    <input
                                        {...register("firstName")}
                                        type="text"
                                        className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm" />
                                    <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                        <p className='ml-1'>{errors.firstName?.message}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-3 block text-sm font-medium text-highlightPrimary">Last Name</label>
                                    <input
                                        {...register("lastName")}
                                        type="text"
                                        className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm"
                                    />
                                    <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                        <p className='ml-1'>{errors.lastName?.message}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-highlightPrimary">Email</label>
                                <input
                                    {...register("email")}
                                    type="text"
                                    className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm"
                                />
                                <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                    <p className='ml-1'>{errors.email?.message}</p>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-highlightPrimary">Password</label>
                                <input
                                    {...register("password")}
                                    type="password"
                                    className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm"
                                />
                                <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                    <p className='ml-1'>{errors.password?.message}</p>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-highlightPrimary">Confirm Password</label>
                                <input
                                    {...register("confirmPassword")}
                                    type="password"
                                    className="focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-2 focus:outline-none sm:text-sm"
                                />
                                <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                    <p className='ml-1'>{errors.confirmPassword?.message}</p>
                                </div>
                            </div>
                            <div>
                                <button type='submit' className="group relative h-10 w-40 overflow-hidden text-lg shadow">
                                    <div className="absolute inset-0 w-2 bg-highlightPrimary transition-all duration-[500ms] ease-out group-hover:w-full"></div>
                                    <span className="text-highlightPrimary relative group-hover:text-black">Sign Up →</span>
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

export default SignUpPage