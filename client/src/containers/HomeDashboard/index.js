import NoteMoniter from './NoteMoniter';
import ReminderMoniter from './ReminderMoniter';
import FlashCardMoniter from './FlashCardMoniter';

import styles from './homeDashboard.module.css';

const HomeDashboard = () => {
    return (
        <div className={styles.dashboard_contaner}>
            <NoteMoniter />
            <ReminderMoniter />
            <FlashCardMoniter />
        </div>
    );
}

export default HomeDashboard;
