import React from 'react'
import Header from '../../components/header/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './profile.css'
import searchicon from '../../components/assets/img/searchicon.png'


const Profile = () => {
    const [oneRandomYoga, setOneRandomYoga] = useState([]);
    const [oneRandomMeditation, setOneRandomMeditation] = useState([]);
    const [recommendedYogas, setRecommendedYogas] = useState([]);
    const [recommendedMeditations, setRecommendedMeditations] = useState([]);
    const [strSearchTitle, setStrSearchTitle] = useState(null);
    //const [strMeditationTitle, setStrMeditationTitle] = useState('');
    //const [strSearchStringYogaTitle, setStrYogaTitle] = useState('');
    const [strRecommended, setStrRecommended] = useState('Your favorite')
    const [userdata, setUserdata] = useState({})

    const user_id = localStorage.getItem('user_id');
    const user_name = localStorage.getItem('user_name');
    const username = user_name

    /*
    useEffect(
        () => {
            fetch(`http://localhost:9898/api/finduser?userid=${user_id}`)
                .then(response => response.json())
                .then(data => setUserdata(data))
        },
        []);*/
    const url = 'http://localhost:9898/api/finduser?user_id=' + user_id;

    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(data => setUserdata(data))
            console.log('1 Object ', userdata)
            console.log("FROM OBen ", user_id)
            console.log('Username', username)
        },
        []);



    // Api Number 4
    useEffect(
        () => {
            fetch('http://localhost:9898/api/getrandomyoga')
                .then(response => response.json())
                .then(data => setOneRandomYoga(data))
        },
        []);

    // Api Number 8
    useEffect(
        () => {
            fetch('http://localhost:9898/api/getrandommeditation')
                .then(response => response.json())
                .then(data => setOneRandomMeditation(data))
        },
        []);

    // APi Number 6
    useEffect(
        () => {
            fetch('http://localhost:9898/api/recommendedyoga')
                .then(response => response.json())
                .then(data => setRecommendedYogas(data))
        },
        []);


    // APi Number 10
    useEffect(
        () => {
            fetch('http://localhost:9898/api/recommendedmeditation')
                .then(response => response.json())
                .then(data => setRecommendedMeditations(data))
        },
        []);

    // Api Number 5
    const urlToSearchYoga = `http://localhost:9898/api/findyoga?stryoga=${strSearchTitle}`;
    useEffect(() => {
        // To separte this search useEffect from the recommendations
        if (strSearchTitle) {
            console.log('Zeile 59', strSearchTitle)
            fetchSearchYogaProgramm();
        }
    }, [strSearchTitle]);

    const fetchSearchYogaProgramm = async () => {
        const data = await fetch(urlToSearchYoga);
        const yogasData = await data.json();
        console.log('3. From fetchSearchMovie() from SearchResults Component', yogasData);
        setRecommendedYogas(yogasData);
        // Stop searching, stop this useEffect effect and show only recommendations from the db 
        setStrSearchTitle(null);
    };

    // Api Number 9
    const urlToSearchMeditation = `http://localhost:9898/api/findmeditation?searchmeditationstring=${strSearchTitle}`;
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
        setRecommendedMeditations(meditationsData);
        // Stop searching, stop this useEffect effect and show only recommendations from the db 
        setStrSearchTitle(null);
    };


    return (
        <structure>
            <Header />
            <div className='clsGreentingAndWishesProfile'>
                <div>{/*Only a placeholder*/}</div>
                <div>
                    <h2 className='clsGreetingProfile'><span className='clsUserNameToBold'> {username}</span> </h2>

                </div>
                <div>{/*Only a placeholder*/}</div>
            </div>

            <article className='searchArticleProfile'>
                <div></div>
                <div className='clsSearchField'><input value={strSearchTitle} type="text" onChange={(e) => { setStrSearchTitle(e.target.value) }} /><img className='searchicon' src={searchicon} alt="search" /></div>
                <div></div>
            </article>

            <article className='clsArticleRecommendedYoga' >
                <div></div>
                <div className='clsRecommendedFourYogaPrograms'>
                    <h2>{strRecommended} Yoga </h2>
                    <div className='clsRecommendedYogaItems'>
                        {
                            recommendedYogas.map(
                                (item) => {
                                    return (
                                        <Link key={item._id} className="clsRecommendedYogaProgramsLinks" to={`/getyoga/${item._id}`}>
                                            <div className='clsYogaItems'>
                                                <img className='clsYogaItemsImage' src={item.image_url} alt={item.title} />
                                                <p className='pYogaItems1'>{item.title}</p>
                                                <p className='pYogaItems2'>{item.level}</p>
                                            </div>
                                        </Link>)
                                }
                            )
                        }</div>

                </div>
                <div></div>

            </article>

            <article id="idRecommendMeditation" className='clsArticleRecommendedYoga'>
                <div></div>
                <div className='clsRecommendedFourYogaPrograms'>
                    <h2>{strRecommended} Meditations </h2>
                    <div className='clsRecommendedYogaItems'>
                        {
                            recommendedMeditations.map(
                                (item) => {
                                    return (
                                        <Link key={item._id} className="clsRecommendedYogaProgramsLinks" to={`/meditationpage/${item._id}`}>
                                            <div className='clsYogaItems'>
                                                <img className='clsYogaItemsImage' src={item.image_url} alt={item.title} />
                                                <p className='pYogaItems1'>{item.title}</p>
                                                <p className='pYogaItems2'>{item.level} </p>
                                            </div>
                                        </Link>)
                                }
                            )
                        }</div>

                </div>
                <div></div>

            </article>

        </structure>

    )
}

export default Profile