import React, { useEffect, useState } from 'react';

function MyMusic(prop) {
    const [likedMusic, setLikedMusic] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getlikedmusic')
            .then((resp) => resp.json())
            .then((data) => {
                newMusicArray(data);
            });
    }, []);

    const newMusicArray = (data) => {
        for(let song in data) {
            if(data[song].username === prop.LikedBy){
                delete data[song]
                setLikedMusic(data)
            }
        }
    }

    const handleClick = (isRemove, e) => {
        e.preventDefault();
        console.log("hello",e.target.artist);
        fetch('http://localhost:3001/write', {
            method: 'POST',
            body: JSON.stringify({
                Id: e.target.id,
                Title: e.target.Title,
                Artist: e.target.artist,
                ImageUrl: e.target.imageurl,
                Remove: isRemove
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
                   {music.LikedBy.map(by => (
                       <ul key={music._id} className='music-list-ul'>
                       <img src = {music.ImageUrl} width='300' height='300' alt='Album Imgage'></img> <br></br> 
                       <strong>Album:</strong> {music.Title} <br></br> 
                       <strong>Artist:</strong> {music.Artist} <br></br>  
                       <strong>Album link:</strong> <a href={'https://open.spotify.com/album/'+ music.Id.slice(music.Id.lastIndexOf(":")+1)} target='_blank' rel='noreferrer noopener'> {music.Title} </a> <br></br>
                       <strong>Gillat av:</strong> {by} <br></br>
                       <div>
                       {music.LikedBy.includes(prop.user) ? (
                           <button
                               title={music.Title}
                               id={music.Id}
                               artist={music.Artist}
                               imageurl={music.ImageUrl}
                               likedBy={by}
                               onClick={(e) =>
                                   handleClick(true, e)
                               }
                           >
                               Ogilla!
                           </button>):(
                               <button
                               title={music.Title}
                               id={music.Id}
                               artist={music.Artist}
                               imageurl={music.ImageUrl}
                               likedBy={by}
                               onClick={(e) =>
                                   handleClick(false, e)
                               }
                           >  {' '}
                               Gilla! {' '}
                           </button>
                           )}
                       </div>
                   </ul>
                   
                       )
                    )}
                    
                    )
                </div>
            ))}
        </div>
    );
}

export default MyMusic;