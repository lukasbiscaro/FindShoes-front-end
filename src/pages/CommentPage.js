import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/my-comment`, { headers })
            .then(response => {
                setDataComments(response.data)
                setLoading(true)
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
            <NavBar />
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
                                            position="top-center"
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
                                                loading
                                                    ?
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
                                                    :
                                                    <div className="flex justify-center items-center my-4">
                                                        <svg className="mt-24 mr-2 w-12 h-12 text-gray-800 animate-spin fill-highlightPrimary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                        </svg>
                                                    </div>
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