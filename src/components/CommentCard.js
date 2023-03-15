import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CommentCard = ({ comment }) => {

    const [dataProfiles, setDataProfiles] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/all-profiles`)
            .then(response => {
                setDataProfiles(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="group relative p-4 bg-white rounded-lg">
            <div className="flex justify-between relative z-50">
                <div>
                    <p className="text-sm text-gray-900 mb-4">
                        <span className="text-gray-900 text-xs font-regular max-w-xs truncate leading-5 whitespace-normal line-clamp-4">
                            {comment.text}
                        </span>
                    </p>
                    {
                        dataProfiles.map((profile) => {
                            return (
                                <p className='text-black text-md font-bold capitalize'>
                                    {profile.user.firstName} {profile.user.lastName}
                                </p>
                            )
                        })
                    }
                    <p className='text-highlightPrimary text-sm'>
                        CEO
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
