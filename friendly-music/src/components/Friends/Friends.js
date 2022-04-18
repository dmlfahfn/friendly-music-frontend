import React, { useEffect, useState } from 'react';

function Friends(prop) {

    const [friends, setFriends] = useState([])

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: prop.user })
    };

    useEffect(() => {
        fetch('http://localhost:3001/friends', requestOptions)
            .then((resp) => resp.json())
            .then((data) => { 
                setFriends(data)
            });
    }, []);

    return (
        <div className='friends-box'>
            {friends.map(friend => (
                <div className='friends'>
                    <h2>Du följer:</h2>
                    {friend.User.map((user) => (
                        <ul key={friend.Id} className='music-list-ul'>{user}</ul>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Friends;