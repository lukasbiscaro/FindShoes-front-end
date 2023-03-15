import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import NavBarLogged from '../components/NavBarLogged';
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { FiDelete } from 'react-icons/fi';

const CommentPage = () => {
    const { loggedInUser } = useContext(AuthContext)

    const headers = {
        'Authorization': 'Bearer ' + loggedInUser.jwt
    }

    const [text, setText] = useState('')
    const [refresh, setRefresh] = useState(false)
    const [dataComments, setDataComments] = useState([])

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
                );
                setText('')
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-comments`)
            .then(response => {
                setDataComments(response.data)
                setRefresh(true)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteComment = commentId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/my-comment/${commentId}`, { headers })
            .then(response => {
                alert("comment deleted.")
                setRefresh(true)
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
                                        className="space-y-8 mb-10">
                                        <div className="sm:col-span-2">
                                            <label className="text-lg text-highlightPrimary2">Your message</label>
                                            <textarea
                                                value={text}
                                                onChange={e => setText(e.target.value)}
                                                rows="6"
                                                className="mt-4 focus:ring-1 focus:ring-highlightPrimary block w-full appearance-none rounded-md bg-bgLogin text-white px-3 py-3 focus:outline-none sm:text-sm placeholder:text-sm placeholder:text-gray-600"
                                                placeholder="Leave a comment..."></textarea>
                                        </div>
                                        <button
                                            type='submit'
                                            className="text-center bg-highlightPrimary text-white font-light rounded-lg px-6 py-2">
                                            <p className="text-black" />Send
                                        </button>
                                        <Toaster
                                            position="bottom-center"
                                            reverseOrder={false}
                                        />
                                    </form>

                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Message
                                                    </th>
                                                    <td scope="col" class="px-6 py-3">
                                                        Delete
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    dataComments.length > 0 && dataComments.map(comment => {
                                                        return (
                                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> 
                                                                <td class="px-6 py-4">
                                                                    {comment.text}
                                                                </td>
                                                                <td class="px-6 py-4">
                                                                    <button
                                                                        onClick={() => deleteComment(comment._id)}>
                                                                        <FiDelete className="text-red-500" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
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
