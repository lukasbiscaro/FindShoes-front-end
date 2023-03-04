import React, { useState, useEffect } from 'react';
import NavBarLogged from "../components/NavBarLogged"
import { FaLock } from 'react-icons/fa'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

    const schemaSign = yup.object().shape({
        firstName: yup.string().required("First Name is required!"),
        lastName: yup.string().required("Last Name is required!"),
        password: yup.string().min(8, "Password must be at least 8 characters!").max(20, "Password must be at most 20 characters!").required("Password must be at least 8 characters!"),
        confirmPassword: yup.string().oneOf([yup.ref("password",), null], "Passwords don't match!").required("Confirm Password is required!")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaSign)
    })

    const [data, setData] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [refresh, setRefresh] = useState(false)

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/users`)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [refresh])

    const onSubmit = () => {

        const updatedUser = {
            firstName,
            lastName
        }

        axios.put(`${process.env.REACT_APP_API_URL}/profile`, updatedUser, { headers })
            .then(response => {
                if (response.status === 200) {
                    setFirstName('')
                    setLastName('')
                    setPassword('')
                    setConfirmPassword('')
                    alert('User Updated')
                    setRefresh(!refresh)
                }
            })
            .catch(err => console.log(err))
    }

    const deleteAccount = e => {
        e.preventDefault()

        axios.delete(`${process.env.REACT_APP_API_URL}/profile`, { headers })
            .then(response => {
                if (response.status === 204) {
                    // toast("Item successfully deleted! ✅")
                    alert("deleted")
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBarLogged />
            {
                data.map(user => {
                    return (
                        <div key={user._id}
                            className="container max-w-screen-lg mx-auto px-5 py-8">
                            <div className="border border-highlightPrimary2 flex flex-col justify-between md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-purple-500 bg-opacity-10 w-full p-8 rounded-xl shadow-lg text-white
            ">
                                <div className="flex flex-col space-y-8">
                                    <div>
                                        <h1 className="font-bold text-4xl tracking-wide">Personal Information</h1>
                                    </div>
                                    <div className="flex flex-col space-y-6 ">
                                        <div>
                                            <div className="text-lg font-bold text-highlightPrimary2">Full Name:</div>
                                            <p>{user.firstName} {user.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-bgPrimary rounded-xl shadow-lg p-8 text-gray-800">
                                        <form onClick={handleSubmit(onSubmit)}
                                            className="flex flex-col space-y-6">
                                            <div className="flex justify-between gap-5">
                                                <div>
                                                    <label className="text-lg text-highlightPrimary2">Edit First Name</label>
                                                    <input
                                                        {...register("firstName")}
                                                        value={firstName}
                                                        onChange={e => setFirstName(e.target.value)}
                                                        type="text"
                                                        placeholder="Enter new first name..."
                                                        className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                                    <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                                        <p className='ml-1'>{errors.firstName?.message}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-lg text-highlightPrimary2">Edit Last Name</label>
                                                    <input
                                                        {...register("lastName")}
                                                        value={lastName}
                                                        onChange={e => setLastName(e.target.value)}
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
                                                    value={user.email}
                                                    type="text"
                                                    className="mt-4 w-full appearance-none rounded-md bg-black text-white px-3 py-3 hover:cursor-not-allowed border border-highlightPrimary" />
                                            </div>
                                            {/* <div>
                                                <label className="text-lg text-highlightPrimary2">Edit Password</label>
                                                <input
                                                    {...register("password")}
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
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
                                                    value={confirmPassword}
                                                    onChange={e => setConfirmPassword(e.target.value)}
                                                    type="password"
                                                    placeholder="Confirm new password..."
                                                    className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600" />
                                                <div className='text-sm text-red-500 mt-5 border border-none rounded-sm'>
                                                    <p className='ml-1'>{errors.confirmPassword?.message}</p>
                                                </div>
                                            </div> */}
                                            <button
                                                onClick={onSubmit}
                                                type='submit'
                                                className="w-full flex items-center justify-center gap-3 self-center bg-highlightPrimary text-white font-light rounded-lg px-6 py-2 mt-10 mb-3">
                                                <FaLock className="text-black" />Save Changes
                                            </button>
                                        </form>
                                        <button
                                            onClick={deleteAccount}
                                            className="w-full flex items-center justify-center gap-3 self-center hover:text-bgPrimary hover:bg-red-600 border text-red-600 border-gray-600 border-opacity-30 bg-bgLogin font-light rounded-lg px-6 py-2 mt-5 mb-3">
                                            Delete Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Footer />
        </>
    )
}

export default ProfilePage







