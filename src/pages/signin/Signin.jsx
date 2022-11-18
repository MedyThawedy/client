// https://www.youtube.com/watch?v=zXORFQvdxR4
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './signin.css'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const login = async () => {
        const result = await fetch('http://localhost:9898/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (result.status === 200) {
            const data = await result.json()
            localStorage.setItem('token', data.token)
            //https://stackoverflow.com/questions/54790135/whats-the-best-solution-for-storing-a-users-id
            localStorage.setItem('user_id', data.user_id)
            localStorage.setItem('user_name', data.user_name)
            console.log('From sign in page!', data.user_name)
            //  localStorage.setItem('userID', 'value');
            //  const USER_ID = localStorage.getItem('userID');
            console.log('Under Token ', data)
            nav('/home')
        }
    }

    return (

        <article className='clsArticleSignin'>
            <div>
                <h2 className='clsHeaderSigninPage'>Welcome Back!</h2>
            </div>
            <input onChange={(e) => { setEmail(e.target.value) }} type="email" className='clsInputSignUp' placeholder='EMAIL' />
            <input onChange={(e) => { setPassword(e.target.value) }} className='clsPasswordSignUp' type="password" placeholder='PASSWORD' />
            <button className='clsBtnSignUp' onClick={login}>Login</button>
            <p className='clsSigninButtom'>DON’T HAVE AN ACCOUNT YET?<Link to='/signup' className='clsAnchorSigninPage'> Sign Up </Link></p>
        </article>

    )
}

export default Signin