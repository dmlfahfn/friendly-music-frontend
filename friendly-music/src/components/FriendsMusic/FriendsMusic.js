import React, { useEffect, useState } from 'react';

function FriendsMusic(prop) {

    const [friendsMusic, setFriendsMusic] = useState([])


    useEffect(() => {
        fetch('http://localhost:3001/friendsmusic')
            .then((resp) => resp.json())
            .then((data) => { 
                setFriendsMusic(data)
            });
    }, []);



    return (
        <div className='liked-music'>

                {friendsMusic.map(music => (
                    <div className='my-music'>
                        <div className='my-music'>
                            <ul className='music-list-ul' key={music._id}>
                            <img className='photo' src = {music.ImageUrl} width='300' height='300' alt='Album Imgage'></img> <br></br> 
                            <strong>Album:</strong> {music.Title} <br></br> 
                            <strong>Artist:</strong> {music.Artist} <br></br>  
                            <strong>Album link:</strong> <a href={'https://open.spotify.com/album/'+ music.Id.slice(music.Id.lastIndexOf(":")+1)} target='_blank' rel='noreferrer noopener'> {music.Title} </a> <br></br>
                            <strong>Gillat av:</strong>
                            {music.LikedBy.map(by => (
                            <div> {by} </div>
                        )
                        )} 
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
    )
}
export default FriendsMusic;