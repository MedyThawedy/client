import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';
import './reminder.css'
import Header from '../header/Header'

const MyTimePicker = () => {

    const [value, setValue] = useState('09:00 AM');


    const onChange = (timeValue) => {
        setValue(timeValue);
    }

    return (
        < div className='clsReminderTimePicker' >
            <TimePicker className='clsInputTimeReminder' onChange={onChange} value={value} use12Hours isOpen={true} />
        </div >
    );

}

export default MyTimePicker