import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './meditationdetails.css';
import heart from '../assets/img/hearticon.png'
import likeicon from '../assets/img/likeicon.png'
import headphone from '../assets/img/headphoneicon.png'
import backicon from '../assets/img/backicon.png'
import downloadicon from '../assets/img/downloadicon.png'
import xicon from '../assets/img/xicon.png'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";



const MeditationDetails = () => {
    const navigate = useNavigate();
    const [meditationDetails, setMeditationDetails] = useState([]);
    const [songs, setSongs] = useState([]);
    let { meditationid } = useParams();

    // Api Number 11
    const url = `http://localhost:9898/api/getmeditation/${meditationid}`;
    console.log('meditationid from meditation details', meditationid)
    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        const data = await fetch(url);
        const meditationDetailsData = await data.json();
        console.log('2. From fetchDetail() ', meditationDetailsData);
        setMeditationDetails(meditationDetailsData);
    };


    // Api Number 11
    const urlsongs = `http://localhost:9898/api/meditationmusic/${meditationid}`;
    useEffect(() => {
        fetchPlaylist();
    }, []);

    const fetchPlaylist = async () => {
        const data = await fetch(urlsongs);
        const musicData = await data.json();
        console.log('2. From fetchDetail() ', musicData);
        setSongs(musicData);
    };

    const navToHomePage = () => {
        navigate('/home');
    }

    return (

        <article className='clsArticleMeditationDetails'>
            <div className='clsHeroSection'>
                <div className='clsHeroSectionIcons'>
                    <div><img onClick={navToHomePage} className='clsMeditationDetailsBackIcon' src={backicon} alt="backicon" /></div>
                    <div><img className='clsMeditationDetailsLikeIcon' src={likeicon} alt="likeicon" />
                        <img className='clsMeditationDetailsDownloadIcon' src={downloadicon} alt="download" /></div>
                </div>
                <img className='imgMeditationDetailsHeroSection' src={meditationDetails.image_url} alt="meditation image" />
            </div>
            <div className='clsArticleMeditationDetailsDivToGrid'>
                <div>{/*Placeholder*/}</div>
                <div>
                    <div className='clsArticleDetailsText'>
                        <h3 className='clsArticleDetailsTextHeader'>{meditationDetails.title}</h3>
                        <p className='clsArticleDetailsTextParagraph1'>{meditationDetails.level}</p>
                        <p className='clsArticleDetailsTextParagraph2'>{meditationDetails.text}</p>
                    </div>
                    <div className='clsHeartAndHeadphone'>
                        <div className='clsHeartAndHeadphoneLeft'><img src={heart} alt="like icon" /> <p className='clsFavorite'>24.234 Favorits</p></div>
                        <div className='clsHeartAndHeadphoneRight'> <img src={headphone} alt="like headphone" /> <p className='clsListenings'>34.234 Listening</p></div>
                    </div>
                    <h3 className='clsHeaderPlaylist'>Playlist </h3>
                    <div className='clsDivSongs'>

                        {

                            songs.map((item) => {
                                return (
                                    <div>
                                        <div> {item.meditationplaylist && item.meditationplaylist.map((songitem) => { return <div>{parse(`${songitem.audio_url}`)} </div> })} </div>

                                    </div>)
                            })

                        }

                    </div>
                </div>
                <div>{/*Placeholder*/}</div>
            </div>


        </article>
    )
}

export default MeditationDetails