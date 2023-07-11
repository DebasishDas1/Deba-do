import NoteForm from '../containers/NoteForm';

import styles from './pages.module.css';

const Notes = () => {
    return (
        <div className={styles.page_contaner} >
            <div className={styles.page_title}>
                Note
            </div>
            <NoteForm />
        </div>
    )
};

export default Notes;