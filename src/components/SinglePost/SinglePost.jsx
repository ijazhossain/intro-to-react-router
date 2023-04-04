import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SinglePost = () => {
    const post = useLoaderData();
    console.log(post)
    const navigate = useNavigate();
    return (
        <div>
            <h1>This i a post of id: {post.id}</h1>
            <p>{post.body}</p>
            <button className='post-btn' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default SinglePost;