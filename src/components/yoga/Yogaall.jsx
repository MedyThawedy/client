import React, { useEffect } from 'react'
import Header from '../header/Header'
import Yoganavigation from '../yoganavigation/Yoganavigation'
import searchicon from '../assets/img/searchicon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './yoga.css'

const Yogaall = () => {


    const [yogas, setYogas] = useState([]);
    const [strSearchTitle, setStrSearchTitle] = useState(null);
    const [strSearchCategory, setStrSearchCategory] = useState(null);
    //const [strYogaTitle, setStrYogaTitle] = useState('');
    //const [strSearchStringYogaTitle, setStrYogaTitle] = useState('');
    const [strRecommended, setStrRecommended] = useState('Recommended')

    useEffect(
        () => {
            fetch('http://localhost:9898/api/getallyoga')
                .then(response => response.json())
                .then(data => setYogas(data))
        },
        []);



    // Api Number 9
    const urlToSearchYoga = `http://localhost:9898/api/findyoga?searchyogastring=${strSearchTitle}`;
    useEffect(() => {
        // To separte this search useEffect from the recommendations
        if (strSearchTitle) {
            setStrRecommended('Search Results ')
            console.log('Zeile 74', strSearchTitle)
            fetchSearchYogaProgramm();
        }
    }, [strSearchTitle]);

    const fetchSearchYogaProgramm = async () => {
        const data = await fetch(urlToSearchYoga);
        const yogasData = await data.json();
        console.log('3. From fetchSearchMovie() from SearchResults Component', yogasData);
        setYogas(yogasData);
        // Stop searching, stop this useEffect effect and show only recommendations from the db 
        setStrSearchTitle(null);
    };

    // Apui Number 28
    //  http://localhost:9898/api/findmeditationcategory?strmeditationcategory=Relax
    // Api Number 9
    const urlToSearchYogaWithCategory = `http://localhost:9898/api/findyoga?searchyogastring=${strSearchCategory}`;
    useEffect(() => {
        // To separte this search useEffect from the recommendations
        if (strSearchTitle) {

            console.log('Zeile 74', strSearchTitle)
            fetchSearchYogaProgrammWithCategory();
        }
    }, [strSearchCategory]);

    const fetchSearchYogaProgrammWithCategory = async () => {
        const data = await fetch(urlToSearchYogaWithCategory);
        const yogasData = await data.json();
        console.log('3. From fetchSearchMovie() from SearchResults Component', yogasData);
        setYogas(yogasData);
        // Stop searching, stop this useEffect effect and show only recommendations from the db 
        setStrSearchTitle(null);
    };

    return (
        <structure className="clsCtructurYoga">
            <div> {/**/}</div>
            <div>
                <Header />
                <h2 className='clsGoodVibes'>Yoga</h2>
                <p className='clsPlaylistGoodVibes3'>Audio-only yoga techniques to help you minimize your screen time and practice on the go.</p>
                <Yoganavigation />

                <article className='searchArticleYoga'>
                    <div></div>
                    <div className='clsSearchField'><input type="text" onChange={(e) => { setStrSearchTitle(e.target.value) }} /><img className='searchicon' src={searchicon} alt="search" /></div>
                    <div></div>
                </article>

                <article className='clsArticleFrameSet'>
                    <div></div>
                    <div className='clsDivFrame'><iframe className='clsIframYogaSong' src="https://open.spotify.com/embed/track/7gKDK9GzPxHRLL4n6YDviC?utm_source=generator" width="89%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
                    <div></div>
                </article>

                <article id="idRecommendYoga" className='clsArticleSearchResultYogas'>
                    <div></div>
                    <div className='cls'>
                        <h2></h2>
                        <div className='clsSearchYogaItems'>
                            {
                                yogas.map(
                                    (item) => {
                                        return (
                                            <Link key={item._id} className="clsRecommendedYogaProgramsLinks" to={`/getyoga/${item._id}`}>
                                                <div className='clsYogaItems'>
                                                    <img className='clsYogaItemsImageInYogaComponent' src={item.image_url} alt={item.title} />
                                                    <p className='pYogatems1'>{item.title}</p>
                                                    <p className='pYogaItems2'>{item.category} </p>
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


export default Yogaall