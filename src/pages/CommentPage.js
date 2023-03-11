import React, { useState, useContext } from 'react'
import axios from 'axios';
import NavBarLogged from '../components/NavBarLogged'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthContext';
import toast, { Toaster } from 'react-hot-toast'

const CommentPage = () => {

    const { loggedInUser } = useContext(AuthContext)

    const headers = {
        'Authorization': 'Bearer ' + loggedInUser.jwt
    }

    const [text, setText] = useState('')
    const [refresh, setRefresh] = useState(false)

    const onSubmit = e => {
        e.preventDefault()

        const newComment = {
            text
        }

        axios.post(`${process.env.REACT_APP_API_URL}/comment`, newComment, { headers })
            .then(response => {
                console.log(response.data)
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
