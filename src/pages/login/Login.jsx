import React from 'react'
import { Link } from 'react-router-dom'
import union from '../../components/assets/img/union.png'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate()

    const navToSignup = () => {
        nav('/signup')
    }

    return (

        <article className='clsArticleLogin'>
            <h1 className='clsLogoLogin'>SILENT MOON</h1>
            <div className='clsHeroSectionBuildLoginDiv'><img className='clsHeroSectionBuildLoginImg' src={union}></img></div>

            <div>
                <h2 className='clsHeaderLoginPage'>What we are doing</h2>
                <p className='clsParaLoginPage' >Thousand of people are using silent moon
                    for meditation and yoga classes.</p>
            </div>
            <button className='clsBtnSignUp' onClick={navToSignup} >SIGN UP</button>
            <p className='clsLoginButtom'>ALREADY HAVE AN ACCOUNT?<Link to='/signin' className='clsAnchorLoginPage'> LOG IN </Link></p>
        </article>

    )
}

export default Login