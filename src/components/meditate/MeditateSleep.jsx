import React, { useEffect } from 'react'
import Header from '../header/Header'
import Meditationnavigation from '../meditationnavigation/Meditationnavigation'
import searchicon from '../assets/img/searchicon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './meditate.css'

const Meditate = () => {


    const [meditations, setMeditations] = useState([]);
    const [strSearchTitle, setStrSearchTitle] = useState(null);
    const [strSearchCategory, setStrSearchCategory] = useState(null);
    //const [strMeditationTitle, setStrMeditationTitle] = useState('');
    //const [strSearchStringYogaTitle, setStrYogaTitle] = useState('');
    const [strRecommended, setStrRecommended] = useState('Recommended')

    useEffect(
        () => {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/findmeditationcategory?strmeditationcategory=Sleep`)
                .then(response => response.json())
                .then(data => setMeditations(data))
        },
        []);



    // Api Number 9
    const urlToSearchMeditation = `${process.env.REACT_APP_BACKEND_URL}/api/findmeditation?searchmeditationstring=${strSearchTitle}`;
    useEffect(() => {
        // To separte this search useEffect from the recommendations
        if (strSearchTitle) {
            setStrRecommended('Search Results ')
            console.log('Zeile 74', strSearchTitle)
            fetchSearchMeditationProgramm();
        }
    }, [strSearchTitle]);

    const fetchSearchMeditationProgramm = async () => {
        const data = await fetch(urlToSearchMeditation);
        const meditationsData = await data.json();
        console.log('3. From fetchSearchMovie() from SearchResults Component', meditationsData);
        setMeditations(meditationsData);
        // Stop searching, stop this useEffect effect and show only recommendations from the db 
        setStrSearchTitle(null);
    };

    // Apui Number 28
    //  http://localhost:9898/api/findmeditationcategory?strmeditationcategory=Relax
    // Api Number 9
    const urlToSearchMeditationWithCategory = `${process.env.REACT_APP_BACKEND_URL}/api/findmeditation?searchmeditationstring=${strSearchCategory}`;
    useEffect(() => {
        // To separte this search useEffect from the recommendations
        if (strSearchTitle) {

            console.log('Zeile 74', strSearchTitle)
            fetchSearchMeditationProgrammWithCategory();
        }
    }, [strSearchCategory]);

    const fetchSearchMeditationProgrammWithCategory = async () => {
        const data = await fetch(urlToSearchMeditationWithCategory);
        const meditationsData = await data.json();
        console.log('3. From fetchSearchMovie() from SearchResults Component', meditationsData);
        setMeditations(meditationsData);
        // Stop searching, stop this useEffect effect and show only recommendations from the db 
        setStrSearchTitle(null);
    };

    return (
        <structure className="clsCtructurMeditate">
            <div> {/**/}</div>
            <div>
                <Header />
                <h2 className='clsGoodVibes'>Meditate</h2>
                <p className='clsPlaylistGoodVibes3'>Audio-only meditation techniques to help you minimize your screen time and practice on the go.</p>
                <Meditationnavigation />

                <article className='searchArticleMeditate'>
                    <div></div>
                    <div className='clsSearchField'><input type="text" onChange={(e) => { setStrSearchTitle(e.target.value) }} /><img className='searchicon' src={searchicon} alt="search" /></div>
                    <div></div>
                </article>

                <article className='clsArticleFrameSet'>
                    <div></div>
                    <div className='clsDivFrame'><iframe className='clsIframMeditateSong' src="https://open.spotify.com/embed/track/7gKDK9GzPxHRLL4n6YDviC?utm_source=generator" width="89%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
                    <div></div>
                </article>

                <article id="idRecommendMeditation" className='clsArticleSearchResultMeditations'>
                    <div></div>
                    <div className='cls'>
                        <h2></h2>
                        <div className='clsSearchMeditationItems'>
                            {
                                meditations.map(
                                    (item) => {
                                        return (
                                            <Link key={item._id} className="clsRecommendedYogaProgramsLinks" to={`/meditationpage/${item._id}`}>
                                                <div className='clsMeditationItems'>
                                                    <img className='clsMeditationItemsImage' src={item.image_url} alt={item.title} />
                                                    <p className='pMeditationtems1'>{item.title}</p>
                                                    <p className='pMeditationItems2'>{item.category} </p>
                                                </div>
                                            </Link>)
                                    }
                                )
                            }</div>

                    </div>
                    <div></div>

                </article>
            </div>
            <div>{/**/}</div>
        </structure >

    )
}


export default Meditate