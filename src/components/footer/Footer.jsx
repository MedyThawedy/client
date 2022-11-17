import React from 'react'
import yogaicon from '../assets/img/yogaicon.png'
import medidateicon from '../assets/img/medidateicon.png'
import homeicon from '../assets/img/homeicon.png'
import musicicon from '../assets/img/musicicon.png'
import profileicon from '../assets/img/profileicon.png'
import activeyogaicon from '../assets/img/activeyogaicon.png'
import activemedidateicon from '../assets/img/activemedidateicon.png'
import activehomeicon from '../assets/img/activehomeicon.png'
import activemusicicon from '../assets/img/activemusicicon.png'
import activeprofileicon from '../assets/img/activeprofileicon.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './footer.css';


const Footer = () => {

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
        <footer className='clsFooterParent'>
            <div className='clsYogaNavItem'>
                <img onClick={handleClick}
                    src={active ? activeyogaicon : yogaicon} alt="" title="yogaicon" />
            </div>
            <div className='clsMedidateNavItem'>
                <Link to='/meditate'>
                    <img id="sizeExceptionIconMedidateException" onClick={handleClick1}
                        src={active1 ? activemedidateicon : medidateicon} alt="" title="medidateicon" />
                </Link>
            </div>
            <div className='clsHomeNavItem'>
                <Link to='/home'>
                    <img onClick={handleClick2} src={active2 ? activehomeicon : homeicon} alt="" title="homeicon" />
                </Link>
            </div>
            <div className='clsMusicNavItem'>
                <Link to='/music'>
                    <img onClick={handleClick3}
                        src={active3 ? activemusicicon : musicicon} alt="" title="musicicon" />
                </Link>
            </div>

            <div className='clsProfileNavItem'>
                <img onClick={handleClick4} src={active4 ? activeprofileicon : profileicon} alt="" title="profileicon" />
            </div>
        </footer>
    )
}

export default Footer