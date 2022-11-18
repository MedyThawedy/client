import React from 'react'
import Header from '../header/Header'
import { useState } from 'react';
import { useEffect } from 'react';
import parse from 'html-react-parser';
import './music.css';
import heart from '../assets/img/hearticon.png'
import headphone from '../assets/img/headphoneicon.png'

const Music = () => {
    const [songs, setSongs] = useState([]);
    useEffect(
        () => {
            fetch('http://localhost:9898/api/getallmusic')
                .then(response => response.json())
                .then(data => setSongs(data))
        }, [])
    return (
        <structure className='clsStructureMusic'>
            <Header />
            <h2 className='clsGoodVibes'>Good Vibes</h2>
            <p className='clsPlaylistGoodVibes1'>PLAYLIST</p>
            <p className='clsPlaylistGoodVibes2'>Breathe. Sense. Feel. Transcend.</p>
            <div className='clsHeartAndHeadphone'>
                <div className='clsHeartAndHeadphoneLeft'><img src={heart} alt="like icon" /> <p className='clsFavorite'>24.234 Favorits</p></div>
                <div className='clsHeartAndHeadphoneRight'> <img src={headphone} alt="like headphone" /> <p className='clsListenings'>34.234 Listening</p></div>
            </div>
            <div className='clsDivAllSongs'>
                {
                    songs.map(
                        (item) => {
                            return (
                                <div>

                                    <div>{parse(`${item.audio_url}`)} </div>
                                </div>
                            )
                        }
                    )
                }

            </div>
            <div className='clsPlaceholderDivMusic'></div>
        </structure>
    )


}

export default Music