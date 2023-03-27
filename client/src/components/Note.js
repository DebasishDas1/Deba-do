// import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './component.module.css';

const Note = ({ time, title }) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = new Date(time).getDate()
    const month = new Date(time).getMonth()
    const year = new Date(time).getFullYear();
    
    const date = `${day} ${months[month]} ${year}`; 

    return (
        <div className = {styles.note} >
            <div className = {styles.note_title} >
                {title}
            </div>
            <div className = {styles.note_footer} >
                {date}
                <div>
                <DeleteIcon size = '1.3em' />
                </div>
            </div>  
        </div>
    )
};

export default Note;