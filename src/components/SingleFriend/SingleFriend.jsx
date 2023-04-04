import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFriend = () => {
    const friend = useLoaderData()
    // console.log(friend)
    const { id, name, email, phone } = friend;
    return (
        <div>
            <h1>Name: {name} id: {id}</h1>
            <h1>Email: {email}</h1>
        </div>
    );
};

export default SingleFriend;