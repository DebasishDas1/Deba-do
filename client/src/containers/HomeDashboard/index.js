import NoteMoniter from './NoteMoniter';

import styles from './homeDashboard.module.css';
import { useEffect, useState } from 'react';

const HomeDashboard = () => {
    const time = new Date().getHours();
    const [greeting, setGreeting] = useState('morning');

    useEffect(() => {
        if ( time < 12 ) {
            console.log(" time : ", time);
            setGreeting('morning');
        }
        else if ( time > 12 && time < 16 ) 
            setGreeting('afternoon');
        else 
            setGreeting('evening');
    }, [time]);

    return (
        <div className = {styles.dashboard_contaner}>
            <div className = {styles.dashboard_title}>
                Good { greeting }
            </div>
            <div className = {styles.dashboard_item_contaner}>
                <NoteMoniter />
            </div>
        </div>
    );
}

export default HomeDashboard;
