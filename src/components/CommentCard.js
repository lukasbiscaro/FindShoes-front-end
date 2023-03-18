import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CommentCard = ({ comment }) => {

    const [authorName, setAuthorName] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/users/${comment.userId}`)
            .then((response) => {
                const author = response.data
                setAuthorName(`${author.firstName} ${author.lastName}`)
            })
            .catch((err) => console.log(err))
    }, [comment.userId])


    return (
        <div className="group relative p-4 bg-white rounded-lg">
            <div className="flex flex-col justify-between relative z-50">
                <p className="text-sm text-gray-900 mb-4">
                    <span className="text-gray-900 text-xs font-regular max-w-xs truncate leading-5 whitespace-normal line-clamp-4">
                        {comment.text}
                    </span>
                </p>
                {
                    authorName && (
                        <p className='text-black text-md font-bold capitalize'>
                            {authorName}
                        </p>
                    )}
                <p className='text-highlightPrimary text-sm'>
                    CEO
                </p>
            </div>
        </div>
    )
}

export default CommentCard
