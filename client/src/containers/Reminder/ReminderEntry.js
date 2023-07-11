import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import style from './reminder.module.css'

const ReminderEntry = ({ reminder, deleteReminder }) => {
    return (
        <div className={style.reminderEntry} >
            <div>{reminder.title}</div>
            <div onClick={deleteReminder} className={style.reminderEntry_delete} >
                <DeleteIcon />
                <EditIcon />
            </div>

        </div>
    )
}

export default ReminderEntry;
