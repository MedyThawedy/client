import React from 'react'
import './addyoga.css'
import { useState } from 'react';
import AdminNavigation from './AdminNavigation';

const AddYoga = () => {

    //Yoga
    const [video_url, setVideo_url] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [title, setTitle] = useState('');
    const [image_url, setImage_url] = useState('');
    const [resMsg, setResMsg] = useState('')
    // Meditation
    const [image_urlM, setImage_urlM] = useState('');
    const [titleM, setTitleM] = useState('');
    const [descriptionM, setDescriptionM] = useState('');
    const [categoryM, setCategoryM] = useState('');
    const [levelM, setLevelM] = useState('');
    const [textM, setTextM] = useState('');
    // Music
    const [titleMusic, setTitleMusic] = useState('');
    const [audioUrl, setAudioUrl] = useState('')

    const fnAddNewMusic = async () => {
        const song = {
            title: titleMusic,
            audio_url: audioUrl
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/addmusic`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                //'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(song)
        })

        if (response.status === 200) {
            const data = await response.json()
            setResMsg(data.message)
            //  if (data.state) {
            setTitleMusic('')
            setAudioUrl('')

            setTimeout(() => {
                setResMsg('');
            }, 2000);
            console.log(data)
        }
        //  }


    }

    const fnAddNewYoga = async () => {
        const yoga = {
            video_url: video_url,
            category: category,
            description: description,
            level: level,
            title: title,
            image_url: image_url
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/addyoga`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json' //,
                //'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(yoga)
        })
        if (response.status === 200) {
            const data = await response.json()
            setResMsg(data.message)
            //  if (data.state) {
            setVideo_url('')
            setCategory('')
            setDescription('')
            setLevel('')
            setTitle('')
            setImage_url('')

            setTimeout(() => {
                setResMsg('');
            }, 2000);
            console.log(data)
        }
        //  }



    }

    const fnAddNewMeditation = async () => {
        const meditation = {
            image_url: image_urlM,
            title: titleM,
            description: descriptionM,
            category: categoryM,
            level: levelM,
            text: textM
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/addmeditation`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json' //,
                //'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(meditation)
        })
        if (response.status === 200) {
            const data = await response.json()
            setResMsg(data.message)
            //  if (data.state) {
            setImage_urlM('')
            setTitleM('')
            setDescriptionM('')
            setCategoryM('')
            setLevelM('')
            setTextM('')


            setTimeout(() => {
                setResMsg('');
            }, 2000);
            console.log(data)
        }
        //  }



    }


    return (
        <structure className="clsStructureAddYoga">
            <AdminNavigation />
            <h2>Add Yoga Programms</h2>
            <article className='clsAddYoga'>
                <div></div>
                <div className='mainDivAddYoga'>

                    <div>Video_url</div> <div><input type="text" value={video_url} onChange={(e) => { setVideo_url(e.target.value) }} /> </div>
                    <div>Category</div> <div><input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} /></div>
                    <div>Description</div> <div><input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} /></div>
                    <div>Level</div> <div><input type="text" value={level} onChange={(e) => { setLevel(e.target.value) }} /></div>
                    <div>Title</div> <div><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} /></div>
                    <div>Image_url</div> <div><input type="text" value={image_url} onChange={(e) => { setImage_url(e.target.value) }} /></div>
                    <div> {resMsg && (<p style={{ color: "red" }}>{resMsg}</p>)}</div> <div className='btnAddYoga'><button className='btnSaveDataInAddYoga' onClick={fnAddNewYoga}>Save Data</button></div>
                </div>
                <div></div>
            </article>

            <h2>Add Meditations Programms</h2>
            <article className='clsAddYoga'>
                <div></div>
                <div className='mainDivAddYoga'>
                    <div>Image_url</div> <div><input type="text" value={image_urlM} onChange={(e) => { setImage_urlM(e.target.value) }} /> </div>
                    <div>Title</div> <div><input type="text" value={titleM} onChange={(e) => { setTitleM(e.target.value) }} /></div>
                    <div>Description</div> <div><input type="text" value={descriptionM} onChange={(e) => { setDescriptionM(e.target.value) }} /></div>
                    <div>Category</div> <div><input type="text" value={categoryM} onChange={(e) => { setCategoryM(e.target.value) }} /></div>
                    <div>Text</div> <div><input type="text" value={textM} onChange={(e) => { setTextM(e.target.value) }} /></div>
                    <div>Level</div> <div><input type="text" value={levelM} onChange={(e) => { setLevelM(e.target.value) }} /></div>
                    <div> {resMsg && (<p style={{ color: "red" }}>{resMsg}</p>)}</div> <div className='btnAddYoga'><button className='btnSaveDataInAddYoga' onClick={fnAddNewMeditation}>Save Data</button></div>
                </div>
                <div></div>
            </article>
            <h2>Add Music</h2>
            <article className='clsAddYoga'>
                <div> {resMsg && (<p style={{ color: "red" }}>{resMsg}</p>)}</div>
                <div className='mainDivAddYoga' id='idAddMusicMainYoga'>
                    <div>Title</div> <div><input value={titleMusic} onChange={(e) => { setTitleMusic(e.target.value) }} type="text" placeholder="Title" />  </div>
                    <div>Audio URL</div> <div> <input value={audioUrl} onChange={(e) => { setAudioUrl(e.target.value) }} type="text" placeholder="Audio URL" /> </div>
                    <div></div> <div className='btnAddYoga' id='btnAddMusic'><button className='btnSaveDataInAddYoga' onClick={fnAddNewMusic}>Save Data</button></div>
                </div>
                <div></div>
            </article>

        </structure>
    )
}

export default AddYoga