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

    
    return (
        <div className='liked-music'>
            {likedMusic.map(music => (
                <div key={music._id}>
                    <ul key={music._id} className='music-list-ul'>
                        <img src = {music.ImageUrl} width='300' height='300' alt='Album Imgage'></img> <br></br> 
                        <strong>Album:</strong> {music.Title} <br></br> 
                        <strong>Artist:</strong> {music.Artist} <br></br>  
                        <strong>Album link:</strong> <a href={'https://open.spotify.com/album/'+ music.Id.slice(music.Id.lastIndexOf(":")+1)} target='_blank' rel='noreferrer noopener'> {music.Title} </a> <br></br>
                        <div>
                            <button
                                // onClick={handleClick}
                                title={music.Title}
                                id={music.Id}
                                artist={music.Artist}
                                imageurl={music.ImageUrl}
                            >
                                Gillat
                            </button>
                        </div>
                    </ul>
                    )
                </div>
            ))}
        </div>
    );
}

export default MyMusic;