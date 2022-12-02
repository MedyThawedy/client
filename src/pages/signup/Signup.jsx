// https://www.youtube.com/watch?v=zXORFQvdxR4
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'
import backicon from '../../components/assets/img/backicon.png'
import { useEffect } from 'react'
import uploadicon from '../../components/assets/img/uploadicon.png'
import AppContext from '../../AppContext';
import { useContext } from 'react';

const Signup = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [base64, setBase64] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage1, setErrorMessage1] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');

    const nav = useNavigate()

    const context = useContext(AppContext);
    context.setShowNav(false);

    useEffect(() => {
        if (file) {
            console.log(file.size);
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
        }
    }, [file])

    const handleReaderLoaded = (event) => {
        setBase64(event.target.result)
    }

    const createuser = async () => {

        const user = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            picture: base64
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/registration`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(user)
        })
        //const data = await response.json()
        //   if (data.state) {
        // setName('')
        // setSurname('')
        // setEmail('')
        // setPassword('')
        // setBase64('')
        // }
        //console.log(data);

        if (response.status === 200) {
            setErrorMessage(false)
            setErrorMessage1(false)
            setErrorMessage2(false)
            setErrorMessage3(false)
            const data = await response.json()
            localStorage.setItem('token', data.token)
            //https://stackoverflow.com/questions/54790135/whats-the-best-solution-for-storing-a-users-id
            localStorage.setItem('user_id', data.user_id)
            //  localStorage.setItem('userID', 'value');
            //  const USER_ID = localStorage.getItem('userID');
            console.log('Under Token ', data)
            setName('')
            setSurname('')
            setEmail('')
            setPassword('')
            setBase64('')
            //nav('/home')
            login(user.email, user.password)
        } else {
            const res = await response.json()
            setErrorMessage(res.message)
            setErrorMessage1(res.message1)
            setErrorMessage2(res.message2)
            setErrorMessage3(res.message3)
            console.log(res)
            setTimeout(() => {
                setErrorMessage('');
                setErrorMessage1('');
                setErrorMessage2('');
                setErrorMessage3('');
            }, 2000);
            setTimeout(() => {
                setErrorMessage('');
                setErrorMessage1('');
                setErrorMessage2('');
                setErrorMessage3('');

            }, 3000);
        }
    }


    const login = async (email, password) => {
        const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
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
            //  localStorage.setItem('userID', 'value');
            //  const USER_ID = localStorage.getItem('userID');
            console.log('Under Token ', data)
            nav('/welcome')
        }
    }

    return (

        <article className='clsArticleSignin'>
            <div>
                <h2 className='clsHeaderSigninPage'>Create your account</h2>
            </div>
            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className='clsInputSignUp' placeholder='NAME' />
            <input value={surname} onChange={(e) => { setSurname(e.target.value) }} type="text" className='clsInputSignUp' placeholder='SURNAME' />
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className='clsInputSignUp' placeholder='EMAIL' />
            {errorMessage && (<p className="clsErrorMsg"> {errorMessage} </p>)}
            {errorMessage1 && (<p className="clsErrorMsg"> {errorMessage1} </p>)}
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='clsPasswordSignUp' type="password" placeholder='PASSWORD' />
            {errorMessage2 && (<p className="clsErrorMsg"> {errorMessage2} </p>)}
            {errorMessage3 && (<p className="clsErrorMsg"> {errorMessage3} </p>)}
            <label class="custom-file-upload">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className='clsImgSignUp' />
                <img className='clsUploadIcon' src={uploadicon} alt="" />    UPLOAD A PICTURE!
            </label>
            <button className='clsBtnSignUp' onClick={createuser}>REGISTER</button>
            <p className='clsSigninButtom'>ALREADY HAVE AN ACCOUNT?<Link to='/signin' className='clsAnchorSigninPage'> GO BACK TO LOGIN</Link></p>
        </article>

    )
}

export default Signup