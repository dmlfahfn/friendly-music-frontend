import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Music = (prop) => {

    const [loading, setLoading] = useState(true)
    const [music, setMusic] = useState([]);

    useEffect(() => {
      fetchMusic();
    }, []);

    const fetchMusic= () => {
        setLoading(true)
        axios
            .get('http://localhost:3001/api')
            .then((res) => {
                setMusic(res.data.albums.items);
            })
            .catch((err) => console.log(err));
            setLoading(false)
    };

    const handleClick = (e) => {
        e.target.textContent = 'Gillat!';
        const imageUrl = e.target.parentNode.childNodes[0].getAttribute("imageurl")

        fetch('http://localhost:3001/write', {
            method: 'POST',
            body: JSON.stringify({
                Id: e.target.id,
                Title: e.target.title,
                Artist: e.target.artist,
                ImageUrl: imageUrl,
                LikedBy: prop.user,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    return (
        <div className='music-container'>
            <p className='music-first-text'>
                Here can you find music to <span>like</span>
                <br /> and <span>inspire</span> your friends with.
            </p>
            <div>
            {loading && <div className='loading'>Loading</div>}
            {!loading && (

              <div className='random-album'>
                <div>
                <div className='title-category'>
                      <h2 >Albums</h2>
                  </div> 
                {music.map(song => 
                        (<ul key={song.data.name} className='music-list-ul'>
                            <img src = {song.data.coverArt.sources[0].url} width={song.data.coverArt.sources[0].width} height={song.data.coverArt.sources[0].height} alt='Album Imgage'></img> <br></br> 
                            <strong>Album:</strong> {song.data.name} <br></br> 
                            <strong>Artist:</strong> {song.data.artists.items[0].profile.name} <br></br>  
                            <strong>Album link:</strong> <a href={'https://open.spotify.com/album/'+ song.data.uri.slice(song.data.uri.lastIndexOf(":")+1)} target='_blank' rel='noreferrer noopener'> {song.data.name} </a> <br></br>
                            <strong>Date Year:</strong> {song.data.date.year}
                            <div>
                                <button
                                    onClick={handleClick}
                                    title={song.data.name}
                                    id={song.data.uri}
                                    imageurl={song.data.coverArt.sources[0].url}
                                    artist={song.data.artists.items[0].profile.name}
                                >
                                    Gilla
                                </button>
                            </div>
                        </ul>)
                    )}
                    </div>
              </div>
            )}
            </div>
        </div>
    );
};

export default Music;