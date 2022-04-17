import React, { useEffect, useState } from 'react';

function Users(prop) {

    const [users, setUsers] = useState([])
    const [index, setIndex] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then((resp) => resp.json())
            .then((data) => { 
                setUsers(data);
                indexNr(data)
            });
    }, []);

    // let arr = []
    const indexNr = (data) => {
        for(let user in data) {
            
            // arr.push(data[user].username)
            console.log("hello",data[user].username);
            // setIndex(data[user].username.indexOf(prop.user))
        }
       
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        console.log(e.target.user);

        fetch('http://localhost:3001/followuser', {
            method: 'POST',
            body: JSON.stringify({
                Id: e.target.id,
                User: e.target.user
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return (
        <div className='user-box'>
            {
            // users.splice(index, 1)
            users.map(user => (     
            <div key={user.id} className='users'>
             {'Användare: '}   {user.username} {' '}
                <button
                    onClick={handleClick}
                    user={user.username}
                    id={user.id}
                >
                    Följ
                </button>
            </div>
             ))}
        </div>
    )
}
export default Users;