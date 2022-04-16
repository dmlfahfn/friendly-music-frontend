import React, { useEffect, useState } from 'react';

function Users(prop) {

    const [users, setUsers] = useState([])
    const [index, setIndex] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((resp) => resp.json())
            .then((data) => {
                setIndex(data.indexOf(prop.user)) 
                setUsers(data);
            });
    }, []);


    return (
        <div className='user-box'>
            {users.splice(index, 1)
            .slice(0).map(user => (     
            <div key={user.id} className='users'>
                {user.username}
            </div>
            )
            )}
        </div>
    )
}
export default Users;