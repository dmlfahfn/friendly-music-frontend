import React, { useEffect, useState } from 'react';

function MyMusic(prop) {
    const [likedMusic, setLikedMusic] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: prop.user })
        };

        fetch('http://localhost:3001/getlikedmusic', requestOptions)
            .then((resp) => resp.json())
            .then((data) => {
                setLikedMusic(data);
            });
    }, []);

        
    

    const handleClick = (isRemove, e ,music) => {
        e.preventDefault();
        if (isRemove) {
            e.target.textContent = 'Ta bort!';
        } else {
            e.target.textContent = 'Gillat!';
        }
        fetch('http://localhost:3001/write', {
            method: 'POST',
            body: JSON.stringify({
                Removed: !!isRemove,
                Id: music.Id,
                Title: music.Title,
                Artist: music.Artist,
                ImageUrl: music.Imageurl,
                LikedBy: prop.user
                
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    
    return (
        <div className='liked-music'>
            {likedMusic.map(music => (
                <div key={music._id}>
                        <ul key={music._id} className='music-list-ul'>
                       <img src = {music.ImageUrl} width='300' height='300' alt='Album Imgage'></img> <br></br> 
                       <strong>Album:</strong> {music.Title} <br></br> 
                       <strong>Artist:</strong> {music.Artist} <br></br>  
                       <strong>Album link:</strong> <a href={'https://open.spotify.com/album/'+ music.Id.slice(music.Id.lastIndexOf(":")+1)} target='_blank' rel='noreferrer noopener'> {music.Title} </a> <br></br>
                       <strong>Gillat av:</strong> 
                        {music.LikedBy.map(by => (
                           <div> {by} </div>
                       )
                    )}
                     <div>
                       {music.LikedBy.includes(prop.user) ? (
                           <button
                               onClick={(e) =>
                                   handleClick(true, e, music)
                               }
                           >
                               Ogilla!
                           </button>):(
                               <button
                               onClick={(e) =>
                                   handleClick(false, e, music)
                               }
                           >  {' '}
                               Gilla! {' '}
                           </button>
                           )}
                       </div>
                       </ul>
                    )
                </div>
                
            ))}
        </div>
    );
}

export default MyMusic;