import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Music = (prop) => {

    const [loading, setLoading] = useState(true)
    const [music, setMusic] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
      fetchMusic();
    }, []);

    const fetchMusic= () => {
        setLoading(true)
        axios
            .get('http://localhost:3001/api')
            .then((res) => {
                setMusic(res.data.albums.items);
                setPlaylists(res.data.playlists.items);
            })
            .catch((err) => console.log(err));
            setLoading(false)
    };

    const handleClick = (isRemove, e, song) => {

        if (isRemove) {
            e.target.textContent = 'Gillat!';
        } else {
            e.target.textContent = 'Ta bort!';
        }

        fetch('http://localhost:3001/write', {
            method: 'POST',
            body: JSON.stringify({
                Id: song.uri,
                Title: song.name,
                Artist: song.artists.items[0].profile.name,
                ImageUrl: song.coverArt.sources[0].url,
                LikedBy: prop.user,
                Removed: !!isRemove
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
                      <h2>Albums</h2>
                  </div> 
                {music.map(song => 
                        (<ul key={song.data.name} className='music-list-ul'>
                            <img className='photo' src = {song.data.coverArt.sources[0].url} width={song.data.coverArt.sources[0].width} height={song.data.coverArt.sources[0].height} alt='Album Imgage'></img> <br></br> 
                            <strong>Album:</strong> {song.data.name} <br></br> 
                            <strong>Artist:</strong> {song.data.artists.items[0].profile.name} <br></br>  
                            <strong>Album link:</strong> <a href={'https://open.spotify.com/album/'+ song.data.uri.slice(song.data.uri.lastIndexOf(":")+1)} target='_blank' rel='noreferrer noopener'> {song.data.name} </a> <br></br>
                            <strong>Date Year:</strong> {song.data.date.year}
                            <div>
                                <button
                                    onClick={(e) =>
                                        handleClick(true, e, song.data)
                                    }
                                >
                                    Gilla
                                </button>
                            </div>
                        </ul>
                        )
                    )}
                    <div className='title-category'>
                      <h2>Playlist</h2>
                  </div> 
                  {/* Seperate playlist because different data would have been sent to backend and therefore you can only visit and not like */}
                    {playlists.map(list => 
                        (
                            <ul key={list.data.uri} className='music-list-ul'>
                            <img className='photo' src = {list.data.images.items[0].sources[0].url} alt='Album Imgage'></img> <br></br> 
                            <strong>Namn:</strong> {list.data.name} <br></br> 
                            <strong>Beskrivning:</strong> {list.data.description} <br></br> 
                            <strong>Länk:</strong> <a href={'https://open.spotify.com/playlist/'+ list.data.uri.slice(list.data.uri.lastIndexOf(":")+1)} target='_blank' rel='noreferrer noopener'> {list.data.name} </a> <br></br>
                            <strong>Ägaren:</strong> {list.data.owner.name}
                            </ul>
                        ))}
                    </div>
              </div>
            )}
            </div>
        </div>
    );
};

export default Music;