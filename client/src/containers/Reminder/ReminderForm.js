import React, { useState } from 'react';
import moment from 'moment';
import MyInput from '../../components/MyInput'

import style from './reminder.module.css'

const ReminderForm = ({ addReminder }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('13:30');
    const [color, setColor] = useState('#009688');

    const handleSubmit = (e) => {
        e.preventDefault();
        const reminder = {
            title,
            date: moment(date).format('MMMM Do YYYY'),
            time: moment(time, 'HH:mm').format('h:mm A'),
            color
        };
        addReminder(reminder);
        setTitle('');
        setDate('');
        setTime('');
        setColor('#009688');
    };

    return (
        <div className={style.reminderForm} >
            <form onSubmit={handleSubmit}>
                <MyInput
                    type='text'
                    value={title}
                    action={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                />
                <MyInput
                    type='date'
                    value={date}
                    action={(e) => setDate(e.target.value)}
                />
                <MyInput
                    type='time'
                    value={time}
                    action={(e) => setTime(e.target.value)}
                />
                <MyInput
                    type='color'
                    value={color}
                    action={(e) => setColor(e.target.value)}
                />
                <button type="submit">Add Reminder</button>
            </form>
        </div>

    );
}

export default ReminderForm;