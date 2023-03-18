import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from "../components/NavBar"
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthContext'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FaLock } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

const ProfilePage = () => {

    const { isLoading, loggedInUser } = useContext(AuthContext)

    const headers = {
        'Authorization': 'Bearer ' + loggedInUser.jwt
    }

    const [data, setData] = useState([])

    const navigate = useNavigate()

    const schemaSign = yup.object().shape({
        firstName: yup.string().required("First Name is required!"),
        lastName: yup.string().required("Last Name is required!"),
        password: yup.string().min(8, "Password must be at least 8 characters!").max(20, "Password must be at most 20 characters!").required("Password must be at least 8 characters!"),
        confirmPassword: yup.string().oneOf([yup.ref("password",), null], "Passwords don't match!").required("Confirm Password is required!")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schemaSign)
    })

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/my-profile`, { headers })
            .then(response => {
                setData(response.data)
            })
            .catch(err => console.log(err))
    }, [isLoading])

    const onSubmit = (data) => {
        const updatedUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password
        }

        axios.put(`${process.env.REACT_APP_API_URL}/my-profile`, updatedUser, { headers })
            .then(response => {
                toast('Profile Successfully Updated!',
                    {
                        icon: '👤',
                        style: {
                            borderRadius: '30px',
                            background: '#5D36FF',
                            color: '#fff',
                        },
                    }
                )
                reset()
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    const deleteAccount = e => {
        e.preventDefault()

        axios.delete(`${process.env.REACT_APP_API_URL}/my-profile`, { headers })
            .then(response => {
                localStorage.clear()
                navigate('/sign-up')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBar />
            <div className="container max-w-screen-xl mx-auto px-5 py-8">
                <div className="border-highlightPrimary2 flex flex-col justify-between md:flex-row md:space-y-0 lg:space-x-6 space-y-6 bg-purple-500 bg-opacity-10 w-full p-8 shadow-lg text-white
            ">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h1 className="text-4xl text-highlightPrimary2 font-light uppercase mb-5">Personal Information</h1>
                        </div>
                        <div className="flex flex-col space-y-6 ">
                            <div>
                                <div className="text-lg font-light text-highlightPrimary2 uppercase">Full Name:</div>
                                <p>{data?.user?.firstName} {data?.user?.lastName}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-bgPrimary shadow-lg p-8 text-gray-800">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col space-y-6">
                                <div className="flex justify-between gap-x-4">
                                    <div className='w-full'>
                                        <label className="text-lg text-highlightPrimary2">Edit First Name</label>
                                        <input
                                            {...register("firstName")}
                                            type="text"
                                            placeholder="Enter new first name..."
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                        <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                            <p className='ml-1'>{errors.firstName?.message}</p>
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <label className="text-lg text-highlightPrimary2">Edit Last Name</label>
                                        <input
                                            {...register("lastName")}
                                            type="text"
                                            placeholder="Enter new last name..."
                                            className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                        <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                            <p className='ml-1'>{errors.lastName?.message}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-lg text-highlightPrimary2">Actual Email</label>
                                    <input
                                        disabled
                                        value={data?.user?.email}
                                        type="text"
                                        className="mt-4 w-full appearance-none rounded-md bg-black text-white px-3 py-3 hover:cursor-not-allowed border border-highlightPrimary" />
                                </div>
                                <div>
                                    <label className="text-lg text-highlightPrimary2">Edit Password</label>
                                    <input
                                        {...register("password")}
                                        type="password"
                                        placeholder="Enter new password..."
                                        className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                    <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                        <p className='ml-1'>{errors.password?.message}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-lg text-highlightPrimary2">Confirm New Password</label>
                                    <input
                                        {...register("confirmPassword")}
                                        type="password"
                                        placeholder="Confirm new password..."
                                        className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                    <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                        <p className='ml-1'>{errors.confirmPassword?.message}</p>
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className="w-full flex items-center justify-center gap-3 self-center bg-highlightPrimary text-white font-light px-6 py-2 mt-10 mb-3">
                                    <FaLock className="text-black" />Save Changes
                                </button>
                                <Toaster
                                    position="top-center"
                                    reverseOrder={false}
                                />
                            </form>
                            <button
                                onClick={deleteAccount}
                                className="w-full flex items-center justify-center gap-3 self-center hover:text-bgPrimary hover:bg-red-600 border text-red-600 border-gray-600 border-opacity-30 bg-bgLogin font-light px-6 py-2 mt-5 mb-3">
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfilePage







