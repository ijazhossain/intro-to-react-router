import React from 'react';
import './FriendDetail.css'
import { Link } from 'react-router-dom';

const FriendDetails = ({ friend }) => {
    const { id, name, email, phone } = friend
    return (
        <div className='friend-detail'>
            <h2>This is all about friend {id}</h2>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button>
                <Link to={`/friend/${id}`}>Show Friend detail</Link>
            </button>
        </div>
    );
};

export default FriendDetails;