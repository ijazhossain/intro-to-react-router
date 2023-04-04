import React from 'react';
import './Post.css'
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { title, userId, id, body } = post
    console.log(post)
    const navigate = useNavigate();
    return (
        <div className='post-detail'>

            <h1>{title}</h1>
            <h3>{body}</h3>
            <button className='post-btn' onClick={() => navigate(`/post/${id}`)}>
                Show Details
            </button>
        </div>
    );
};

export default Post;