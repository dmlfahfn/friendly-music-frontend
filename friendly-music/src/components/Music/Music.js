import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Music = () => {
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
                console.log("res.data",res.data.albums.items[0].data.name);
            })
            .catch((err) => console.log(err));
            setLoading(false)
    };

    // const handleClick = (evt) => {
    //     evt.target.textContent = 'Gillat!';
    //     const mus = fetch('http://localhost:4000/write', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             Id: evt.target.id,
    //             Title: evt.target.title,
    //             ImageUrl: evt.target.parentNode.id,
    //             LikedBy: prop.user,
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    // };

    return (
        <div className='random-music-container'>
            <p className='random-first-text'>
                Här du hitta ny musik att <span>gilla</span>
                <br /> och <span>inspirera</span> dina vänner med.
            </p>
            <div className='random-btns-con'>
                <a href="true" onClick={fetchMusic} className='new-music-btn'>
                    Slumpa ny musik
                </a>
            </div>
            <div>
            {loading && <div>Laddar</div>}
            {!loading && (
              <div>
                <h2>Hämtar Musiken!</h2>
                {music.map(song => (<ul>{song.data.name}</ul>))}
              </div>
            )}
            </div>
            {/* <div>
                {music.map((music) => (
                    <div
                        key={music.Id}
                        id={music.ImageUrl}
                        className='random-music-box'
                    >
                        <a
                            href={'https://www.ica.se/recept/' + music.Id}
                            className='random-music-container'
                        >
                            <img
                                src={music.ImageUrl}
                                alt='Bilden kunde inte laddas'
                            />
                            <p className='random-music-title'>
                                {music.Title}
                            </p>
                        </a>
                        <button
                            // onClick={handleClick}
                            title={music.Title}
                            id={music.Id}
                            imageurl={music.ImageUrl}
                        >
                            Gilla
                        </button>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Music;