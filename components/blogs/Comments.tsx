import React, { useState } from 'react'

const Comments = ({ comment, blogId }) => {
    return (
        <div>
            <div className='border-blue-600 text-black'>{comment}</div>
        </div>
    )
}

export default Comments
