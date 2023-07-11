import ReminderForm from '../containers/Reminder/ReminderForm'
import ReminderList from '../containers/Reminder/ReminderList'

import styles from './pages.module.css';
import React, { useState } from 'react';

const Reminder = () => {
    const [reminders, setReminders] = useState([]);

    const addReminder = (reminder) => {
        setReminders([...reminders, reminder]);
    };

    const deleteReminder = (index) => {
        const newReminders = [...reminders];
        newReminders.splice(index, 1);
        setReminders(newReminders);
    };

    return (
        <div className={styles.page_contaner} >
            <div className={styles.page_title}>
                Reminder
            </div>
            <ReminderForm addReminder={addReminder} />
            <ReminderList reminders={reminders} deleteReminder={deleteReminder} />
        </div>
    )
};

export default Reminder;