import NoteList from '../../components/NotesList';

import styles from './homeDashboard.module.css';

const NoteMoniter = () => {
    const arr = [
        {
            time : 1,
            title : 'tgfdfgfd',
        },
        {
            time : 2,
            title : 'tgfdfgfd',
        },
        {
            time : 3,
            title : 'tgfdfgfd',
        },
    ]

    return (
        <div className = {styles.dashboard_note}>
            <div className = {styles.dashboard_note_title}>
                Note
            </div>
            <div className = {styles.dashboard_note_body}>
                <div className = {styles.dashboard_note_count}>
                    {arr.length}
                </div>
                <div className = {styles.dashboard_note_contaner}>
                    <NoteList notes = {arr}/>
                </div>
            </div>
        </div>
    );
};

export default NoteMoniter;