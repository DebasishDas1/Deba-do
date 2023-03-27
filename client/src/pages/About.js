import styles from './pages.module.css';
import logo from '../assets/logo.png'

const About = () => {
    const year = new Date().getFullYear()

    return (
        <div className={styles.page_contaner} >
            <div className = {styles.about_page} >
                <h1>Deba do</h1>
                version : 1.0
                <img src={logo} alt="app logo" />
                Debasish Das © {year}
            </div>
        </div>
    )
};

export default About ;