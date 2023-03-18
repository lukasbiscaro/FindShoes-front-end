import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import NavBarLogged from '../components/NavBarLogged'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'

const CommentPage = () => {

    const { loggedInUser } = useContext(AuthContext)

    const headers = {
        'Authorization': 'Bearer ' + loggedInUser.jwt
    }

    const { commentId } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const [text, setText] = useState('')
    const [dataComments, setDataComments] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/my-comment`, { headers })
            .then(response => {
                setDataComments(response.data)
            })
    }, [refresh])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/my-comment/${commentId}`, { headers })
            .then(response => {
                const {
                    text
                } = response.data

                setText(text)
            })
    }, [commentId])

    const onSubmit = e => {
        e.preventDefault()

        const newComment = {
            text
        }

        axios.post(`${process.env.REACT_APP_API_URL}/my-comment`, newComment, { headers })
            .then(response => {
                toast('Thank you for your feedback!',
                    {
                        icon: '😁',
                        style: {
                            borderRadius: '30px',
                            background: '#5D36FF',
                            color: '#fff',
                        },
                    }
                )
                setText('')
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    const editButton = e => {
        e.preventDefault()

        const updatedComment = {
            text
        }

        axios.put(`${process.env.REACT_APP_API_URL}/my-comment/${commentId}`, updatedComment, { headers })
            .then(response => {
                toast('Comment was Successfully Updated!',
                    {
                        icon: '💬',
                        style: {
                            borderRadius: '30px',
                            background: '#5D36FF',
                            color: '#fff',
                        },
                    }
                )
                setText('')
                setTimeout(() => {
                    window.location.reload(
                        navigate('/my-comment')
                    )
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    const deleteComment = commentId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/my-comment/${commentId}`, { headers })
            .then(response => {
                toast('Comment was Successfully Deleted!',
                    {
                        icon: '🗑️',
                        style: {
                            borderRadius: '30px',
                            background: '#5D36FF',
                            color: '#fff',
                        },
                    }
                )
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBarLogged />
            <div className="container max-w-screen-xl mx-auto px-5 py-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <section className="pt-15">
                                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-white">Leave us a Feedback.</h2>
                                    <p className="mb-8 lg:mb-16 font-light text-center text-white text-opacity-50 sm:text-xl">Provide your feedback on how it was used on our platform, it is of great importance to us.</p>
                                    <form
                                        onSubmit={onSubmit}
                                        className="space-y-8">
                                        <div className="sm:col-span-2">
                                            <label className="text-lg text-highlightPrimary2">Your message</label>
                                            <textarea
                                                value={text}
                                                onChange={e => setText(e.target.value)}
                                                rows="6"
                                                className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600"
                                                placeholder="Leave a comment..."></textarea>
                                        </div>
                                        {location.pathname === "/my-comment" && (
                                            <button
                                                type='submit'
                                                className="text-center bg-highlightPrimary text-white font-light px-6 py-2">
                                                <p className="text-black" />Send
                                            </button>
                                        )}
                                        {location.pathname.startsWith(`/my-comment/${commentId}`) && (
                                            <button
                                                type='submit'
                                                onClick={editButton}
                                                className="text-center bg-highlightPrimary text-white font-light px-6 py-2">
                                                <p className="text-black" />Save Edit
                                            </button>
                                        )}
                                        <Toaster
                                            position="bottom-center"
                                            reverseOrder={false}
                                        />
                                    </form>
                                    <div className="relative overflow-x-auto shadow-md mt-24">
                                        <table className="w-full text-sm text-left">
                                            <thead className="border-b border-highlightPrimary2 bg-purple-500 bg-opacity-10">
                                                <tr>
                                                    <th className="text-highlightPrimary2 font-light px-6 py-3 uppercase">
                                                        your recent comments
                                                    </th>
                                                    <th>
                                                    </th>
                                                </tr>
                                            </thead>
                                            {
                                                dataComments.map((comment) => {
                                                    return (
                                                        <tbody key={comment._id}>
                                                            <tr className="flex flex-col sm:flex sm:flex-row sm:justify-between sm:items-center  justify-start items-start bg-transparent border-b border-highlightPrimary2">
                                                                <td className="px-6 py-4 text-white max-w-xs sm:max-w-sm md:max-w-lg truncate">
                                                                    {comment.text}
                                                                </td>
                                                                <td className="text-center px-6 mb-3 sm:mb-0">
                                                                    <Link to={`/my-comment/${comment._id}`}>
                                                                        <button
                                                                            className="bg-bgLogin p-1 uppercase font-medium text-blue-600 hover:underline mr-3">Edit</button>
                                                                    </Link>
                                                                    <button
                                                                        onClick={() => deleteComment(comment._id)}
                                                                        className="bg-bgLogin p-1 uppercase font-medium text-red-600 hover:underline">delete</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }
                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CommentPage