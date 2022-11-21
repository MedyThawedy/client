import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './yogaprograms.css';
import heart from '../assets/img/hearticon.png'
import playicon from '../assets/img/playicon.png'
import likeicon from '../assets/img/likeicon.png'
import headphone from '../assets/img/headphoneicon.png'
import backicon from '../assets/img/backicon.png'
import downloadicon from '../assets/img/downloadicon.png'
import xicon from '../assets/img/xicon.png'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";
import AdminNavigation from './AdminNavigation';




const YogaPrograms = () => {
    const navigate = useNavigate();
    const [yogaDetails, setYogaDetails] = useState([]);
    const [songs, setSongs] = useState([]);
    let { yogaid } = useParams();

    // Api Number 11
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/getallyoga`;
    console.log('yogaid from yoga details', yogaid)
    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        const data = await fetch(url);
        const yogaDetailsData = await data.json();
        console.log('2. From fetchDetail() ', yogaDetailsData);
        setYogaDetails(yogaDetailsData);
    };


    const navToHomePage = () => {
        navigate('/addyoga');
    }

    return (
        yogaDetails.map((item) => {

            return (

                <article className='clsArticleYogaDetails'>
                    <AdminNavigation />
                    <div className='clsHeroSection'>
                        <div className='clsHeroSectionIcons'>
                            <div><img onClick={navToHomePage} className='clsYogaDetailsBackIcon' src={backicon} alt="backicon" /></div>

                            <div><img className='clsYogaDetailsLikeIcon' src={likeicon} alt="likeicon" />
                                <img className='clsYogaDetailsDownloadIcon' src={downloadicon} alt="download" /></div>
                        </div>
                        <img className='imgYogaDetailsHeroSection' src={item.image_url} alt="yoga image" />
                    </div>
                    <div className='clsArticleYogaDetailsDivToGrid'>
                        <div>{/*Placeholder*/}</div>
                        <div>
                            <div className='clsArticleDetailsText'>
                                <h3 className='clsArticleDetailsTextHeader'>{item.title}</h3>
                                <p className='clsArticleDetailsTextParagraph2'>{item._id}</p>
                                <p className='clsArticleDetailsTextParagraph1'>{item.level}</p>
                                <p className='clsArticleDetailsTextParagraph2'>{item.description}</p>
                            </div>
                            <div className='clsHeartAndHeadphone'>
                                <div className='clsHeartAndHeadphoneLeft'><img src={heart} alt="like icon" /> <p className='clsFavorite'>24.234 Favorits</p></div>
                                <div className='clsHeartAndHeadphoneRight'> <img src={headphone} alt="like headphone" /> <p className='clsListenings'>34.234 Listening</p></div>
                            </div>
                            <h3 className='clsHeaderPlaylist'>Video </h3>
                            <div className='clsDivSongs'>
                                {parse(`${item.video_url}`)}
                            </div>
                        </div>
                        <div>{/*Placeholder*/}</div>
                    </div>
                </article>

            )

        })



    )
}

export default YogaPrograms