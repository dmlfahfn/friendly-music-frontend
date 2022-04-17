import React, { useEffect, useState } from 'react';

function Users(prop) {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((resp) => resp.json())
            .then((data) => { 
                newUserArray(data)
            });
    }, []);


    const newUserArray = (data) => {
        for(let user in data) {
            if(data[user].username === prop.user){
                delete data[user]
                setUsers(data)
            }
        }
    }

    const handleClick = (e, user) => {
        e.preventDefault();

        fetch('http://localhost:3001/followuser', {
            method: 'POST',
            body: JSON.stringify({
                Id: user.id,
                User: user.username,
                Me: prop.user
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return (
        <div className='user-box'>
            {users.slice(0).map(user => (     
            <div key={user.id} className='users'>
             {'Användare: '}   {user.username} {' '}
                <button
                    user={user.username}
                    id={user.id}
                    me={prop.user}
                    onClick={(e) =>
                        handleClick( e, user)
                    }
                >
                    Följ
                </button>
            </div>
             ))}
        </div>
    )
}
export default Users;