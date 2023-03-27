import styles from './sideBar.module.css';
import logo from '../../assets/logo.png';

const SideBarTop = () => {
    return (
        <div className = {styles.SideBar_top} >
            <img src={logo} alt="app logo" />
            Deba do
        </div>
    )
}

export default SideBarTop;