import React, { useEffect, useState } from 'react';

function Friends(prop) {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/friends')
            .then((resp) => resp.json())
            .then((data) => { 
                setFriends(data)
            });
    }, []);

    return (
        <div className='friends-box'>
            {friends.map(friend => (
                <div>
                    {friend.User.map(user => {
                        <ul className='music-list-ul'>Du följer: {user}</ul>
                    })}
                </div>
            ))}
        </div>
    )
}
export default Friends;