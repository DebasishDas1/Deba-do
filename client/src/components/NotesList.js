import Note from './Note';

import styles from './component.module.css';

const NotesList = ({ notes }) => {
    return (
        <div className={styles.note_list} >
            {
                notes.map( (note) => 
                    <Note 
                        key = {note.time} 
                        time = {note.time}
                        title = {note.title}
                    />
                )
            }
        </div> 
    )
};

export default NotesList;