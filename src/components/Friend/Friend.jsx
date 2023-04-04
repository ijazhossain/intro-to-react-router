import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendDetails from '../FriendDetails/FriendDetails';

const Friend = () => {
    const friends = useLoaderData()
    console.log(friends);
    return (
        <div>

            {
                friends.map(friend => <FriendDetails
                    key={friend.id}
                    friend={friend}
                ></FriendDetails>)
            }
        </div>
    );
};

export default Friend;