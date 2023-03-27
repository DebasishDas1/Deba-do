import HomeDashboard from '../containers/HomeDashboard';

import styles from './pages.module.css';

const Home = () => {

    return (
        <div className = {styles.page_contaner} >
            <HomeDashboard />
        </div>
    )
};

export default Home ;