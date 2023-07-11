import ReminderEntry from './ReminderEntry';
import Calendar from 'react-calendar';
import moment from 'moment';
import style from './reminder.module.css'

import { useState } from 'react';

function ReminderList({ reminders, deleteReminder, editReminder }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={style.reminderList} >
            <Calendar value={selectedDate} onClickDay={handleDateClick} />
            {reminders.map((reminder, index) => {
                const reminderDate = moment(reminder.date, 'MMMM Do YYYY').toDate();
                if (selectedDate.getTime() === reminderDate.getTime()) {
                    return (
                        <ReminderEntry
                            key={index}
                            reminder={reminder}
                            deleteReminder={() => deleteReminder(index)}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default ReminderList;