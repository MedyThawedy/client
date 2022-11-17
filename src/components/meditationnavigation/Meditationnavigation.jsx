import React from 'react'
import allicon from '../assets/img/allicon.png'
import favoritesicon from '../assets/img/favoritesicon.png'
import anxiousicon from '../assets/img/anxiousicon.png'
import kidsicon from '../assets/img/kidsicon.png'
import sleepicon from '../assets/img/sleepicon.png'
import activeallicon from '../assets/img/activeallicon.png'
import activefavoritesicon from '../assets/img/activefavoritesicon.png'
import activeanxiousicon from '../assets/img/activeanxiousicon.png'
import activesleepicon from '../assets/img/activesleepicon.png'
import activekidsicon from '../assets/img/activekidsicon.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './meditationnavigation.css';


const Meditationnavigation = () => {

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const handleClick = () => {
        setActive(!active);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
    };
    const handleClick1 = () => {
        setActive(false);
        setActive1(!active1);
        setActive2(false);
        setActive3(false);
        setActive4(false);
    };
    const handleClick2 = () => {
        setActive(false);
        setActive1(false);
        setActive2(!active2);
        setActive3(false);
        setActive4(false);
    };
    const handleClick3 = () => {
        setActive(false);
        setActive1(false);
        setActive2(false);
        setActive3(!active3);
        setActive4(false);
    };
    const handleClick4 = () => {
        setActive(false);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(!active4);
    };

    return (
        <nav className='clsNavMeditationParent'>
            <div className='clsAllNavItem'>
                <Link >
                    <img onClick={handleClick}
                        src={active ? activeallicon : allicon} alt="" title="allicon" />
                </Link>
            </div>
            <div className='clsFavoritesNavItem'>
                <Link>
                    <img onClick={handleClick1}
                        src={active1 ? activefavoritesicon : favoritesicon} alt="" title="medidateicon" />
                </Link>
            </div>
            <div className='clsAnxiousNavItem'>
                <Link >
                    <img onClick={handleClick2} src={active2 ? activeanxiousicon : anxiousicon} alt="" title="anxiousicon" />
                </Link>
            </div>
            <div className='clsSleepNavItem'>
                <Link >
                    <img onClick={handleClick3}
                        src={active3 ? activesleepicon : sleepicon} alt="" title="Sleepicon" />
                </Link>
            </div>

            <div className='clsKidsNavItem'>
                <Link>
                    <img onClick={handleClick4} src={active4 ? activekidsicon : kidsicon} alt="" title="profileicon" />
                </Link>
            </div>
        </nav>
    )
}

export default Meditationnavigation