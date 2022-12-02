import React from 'react'
import { Link } from 'react-router-dom'
import imagewelcome from '../../components/assets/img/ImageWelcome.png'
import './welcome.css'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../AppContext';
import { useContext } from 'react';

const Welcome = () => {
    const nav = useNavigate()
    const user_name = localStorage.getItem('user_name');
    const username = user_name

    const navToReminder = () => {
        nav('/reminder')
    }

    const context = useContext(AppContext);
    context.setShowNav(false);

    return (

        <article className='clsArticleWelcome'>
            <h1 className='clsLogoWelcome'>SILENT MOON</h1>
            <div className='clsHeroSectionBuildWelcomeDiv'><img className='clsHeroSectionBuildWelcomeImg' src={imagewelcome}></img></div>

            <div className='clsWelcomeGreeting'>
                <h2 className='clsHeaderWelcomePage'>Hi {username}</h2>
                <h2 className='clsParaWelcomePage' >Welcome to Silent Moon</h2>
            </div>
            <button className='clsBtnGetStartet' onClick={navToReminder}>GET STARTED</button>
        </article>

    )
}

export default Welcome