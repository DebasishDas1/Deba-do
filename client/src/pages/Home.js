import HomeDashboard from '../containers/HomeDashboard';
import { useEffect, useState } from 'react';

import styles from './pages.module.css';

const Home = () => {
    const time = new Date().getHours();
    const [greeting, setGreeting] = useState('morning');

    useEffect(() => {
        if (time < 12) {
            console.log(" time : ", time);
            setGreeting('morning');
        }
        else if (time > 12 && time < 16)
            setGreeting('afternoon');
        else
            setGreeting('evening');
    }, [time]);

    return (
        <div className={styles.page_contaner} >
            <div className={styles.page_title}>
                Good {greeting}
            </div>
            <HomeDashboard />
        </div>
    )
};

export default Home;