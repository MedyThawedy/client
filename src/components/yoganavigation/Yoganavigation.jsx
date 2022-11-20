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
import './yoganavigation.css';


const Yoganavigation = () => {

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
        <nav className='clsNavYogaParent'>
            <div className='clsAllNavItem'>
                <Link to='/yogaall'>
                    <img className='clsNavFooterItemImg' onClick={handleClick}
                        src={active ? activeallicon : allicon} alt="" />
                </Link>
            </div>
            <div className='clsFavoritesNavItem'>
                <Link to='/yogafavorites'>
                    <img className='clsNavFooterItemImg' onClick={handleClick1}
                        src={active1 ? activefavoritesicon : favoritesicon} alt="" />
                </Link>
            </div>
            <div className='clsAnxiousNavItem'>
                <Link to='/yogaanxious'>
                    <img className='clsNavFooterItemImg' onClick={handleClick2} src={active2 ? activeanxiousicon : anxiousicon} alt="" />
                </Link>
            </div>
            <div className='clsSleepNavItem'>
                <Link to='/yogasleep'>
                    <img className='clsNavFooterItemImg' onClick={handleClick3}
                        src={active3 ? activesleepicon : sleepicon} alt="" />
                </Link>
            </div>

            <div className='clsKidsNavItem'>
                <Link to='/yogakids'>
                    <img onClick={handleClick4} src={active4 ? activekidsicon : kidsicon} alt="" />
                </Link>
            </div>
        </nav>
    )
}

export default Yoganavigation