import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';
import './reminder.css'
import Header from '../header/Header'
import MyTimePicker from './MyTimePicker';
import { Link } from 'react-router-dom';


const Reminder = () => {

    const [value, setValue] = useState('09:00 AM');
    const [responseMsg, setResponseMsg] = useState('');
    const [reminderDay, setReminderDay] = useState('');

    const onChange = (timeValue) => {
        setValue(timeValue);
    }

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);


    const handleClick = () => {
        setActive(!active);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive6(false);
        setReminderDay('Monday');
    };
    const handleClick1 = () => {
        setActive(false);
        setActive1(!active1);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive6(false);
        setReminderDay('Tuesday');
    };
    const handleClick2 = () => {
        setActive(false);
        setActive1(false);
        setActive2(!active2);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive6(false);
        setReminderDay('Wednesday');

    };
    const handleClick3 = () => {
        setActive(false);
        setActive1(false);
        setActive2(false);
        setActive3(!active3);
        setActive4(false);
        setActive5(false);
        setActive6(false);
        setReminderDay('Thursday');
    };
    const handleClick4 = () => {
        setActive(false);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(!active4);
        setReminderDay('Friday');
        setActive5(false);
        setActive6(false);

    };

    const handleClick5 = () => {
        setActive(false);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(!active5);
        setActive6(false);
        setReminderDay('Saturday');

    };

    const handleClick6 = () => {
        setActive(false);
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
        setActive6(!active6);
        setReminderDay('Sunday');

    };



    const style1 = {
        color: '#FAF2DA',
        backgroundColor: "#FAF2DA"
    };

    const style2 = {
        color: 'red',
        backgroundColor: "#4A503D"

    };

    const fnAddNewAppointment = async () => {
        const appointment = {
            day: reminderDay,
            time: value
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/saveappointment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                //'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(appointment)
        })

        const data = await response.json()
        //  if (data.state) {
        setReminderDay('')
        setResponseMsg(data.message)
        console.log(response)

        setTimeout(() => {
            setResponseMsg('');
        }, 2000);
        //  }
        console.log(data)

    }

    return (

        <section className='clsSectionReminder'>
            <Header />
            <div className='clsDivMainTimePicker'>
                <div>{/*Placeholder*/}</div>
                <div className='clsMainDivReminder'>
                    <h2 className='clsReminderQuestion'>What time would you like to meditate?</h2>
                    <p className='clsWhatTheyRecommend'>Any time you can choose but We recommend first thing in th morning.</p>
                    < div className='clsReminderTimePicker' >
                        <TimePicker className='clsInputTimeReminder' onChange={onChange} value={value} use12Hours isOpen={true} />
                    </div >
                    <h2 className='clsReminderQuestion2'>Which day would you like to meditate?</h2>
                    <p className='clsWhatTheyRecommend2'>Everyday is best, but we recommend picking
                        at least five.</p>

                    <div className='reminderDays' >
                        <div className='monday' onClick={handleClick} style={{ backgroundColor: active ? "#F5F5F9" : "#8E9775", color: active ? '#263238' : '#FAF2DA' }}><p>M</p></div>
                        <div className='tuesday' onClick={handleClick1} style={{ backgroundColor: active1 ? "#F5F5F9" : "#8E9775", color: active1 ? '#263238' : '#FAF2DA' }}> <p>T</p> </div>
                        <div className='wednesday' onClick={handleClick2} style={{ backgroundColor: active2 ? "#F5F5F9" : "#8E9775", color: active2 ? '#263238' : '#FAF2DA' }}><p>W</p> </div>
                        <div className='thursday' onClick={handleClick3} style={{ backgroundColor: active3 ? "#F5F5F9" : "#8E9775", color: active3 ? '#263238' : '#FAF2DA' }}><p>TH</p></div>
                        <div className='friday' onClick={handleClick4} style={{ backgroundColor: active4 ? "#F5F5F9" : "#8E9775", color: active4 ? '#263238' : '#FAF2DA' }}><p>F</p> </div>
                        <div className='saturday' onClick={handleClick5} style={{ backgroundColor: active5 ? "#F5F5F9" : "#8E9775", color: active5 ? '#263238' : '#FAF2DA' }}><p>S</p> </div>
                        <div className='sunday' onClick={handleClick6} style={{ backgroundColor: active6 ? "#F5F5F9" : "#8E9775", color: active6 ? '#263238' : '#FAF2DA' }}><p>SU</p> </div>
                    </div>


                </div>
                <div>{/*Placeholder*/}</div>
            </div>
            {responseMsg && (<p className="clsReminderMsg"> {responseMsg} </p>)}
            <div className='clsBottomReminder'>
                <button className='clsBtnReminderSave' onClick={fnAddNewAppointment}>SAVE</button>
                <p className='clsReminderNoThanks'><Link to='/home' className='clsAnchorLoginPage'> NO Thanks </Link></p>
            </div>
        </section>
    );

}

export default Reminder