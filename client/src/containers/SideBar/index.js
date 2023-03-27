import styles from './sideBar.module.css';
import SideBarTop from './SideBarTop';
import SideBarMiddle from './SideBarMiddle';
import SideBarBottom from './SideBarBollom';

const SideBar = () => {
    return (
        <div className = {styles.SideBar_contaner} >
            <SideBarTop />
            <SideBarMiddle />
            <SideBarBottom />
        </div>
    )
};

export default SideBar ;