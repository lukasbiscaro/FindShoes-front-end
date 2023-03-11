import React from 'react'

const CommentCard = ({ comment }) => {
    return (
        <div className="group relative p-4 bg-white rounded-lg">
            <div className="flex justify-between relative z-50">
                <div>
                    <p className="text-sm text-gray-900 mb-4">
                        <span className="text-gray-900 text-xs font-regular">
                            {comment.text}
                        </span>
                    </p>
                    <p className='text-black text-lg font-bold'>
                        Name of the person
                    </p>
                    <p className='text-highlightPrimary text-sm'>
                        CEO
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
