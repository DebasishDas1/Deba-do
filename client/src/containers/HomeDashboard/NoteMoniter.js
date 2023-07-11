import NoteList from '../../components/NotesList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../apis/noteApi';

import styles from './homeDashboard.module.css';

const NoteMoniter = () => {
    const arr = useSelector((state) => state.note.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNotes);
    }, [dispatch])

    return (
        <div className={styles.dashboard_block}>
            <div className={styles.dashboard_block_title}>
                Note
            </div>
            <div className={styles.dashboard_note_body}>
                <div className={styles.dashboard_note_count}>
                    {arr.length}
                </div>
                <div className={styles.dashboard_note_contaner}>
                    <NoteList notes={arr} />
                </div>
            </div>
        </div>
    );
};

export default NoteMoniter;