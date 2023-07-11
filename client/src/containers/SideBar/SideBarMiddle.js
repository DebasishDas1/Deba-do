import styles from './sideBar.module.css';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

import SideBarMiddleOption from './SideBarMiddleOption';

const SideBarMiddle = () => {
    return (
        <div className={styles.SideBar_middle} >
            <ul>
                <SideBarMiddleOption to='/' title='Home' Icon={OtherHousesIcon} />
                <SideBarMiddleOption to='/notes' title='Notes' Icon={NoteAltIcon} />
                <SideBarMiddleOption to='/reminder' title='Reminder' Icon={LightbulbIcon} />
                <SideBarMiddleOption to='/flashCard' title='Flash Card' Icon={DashboardCustomizeIcon} />
                <SideBarMiddleOption to='/trash' title='Trash' Icon={DeleteIcon} />
                <SideBarMiddleOption to='/about' title='About' Icon={InfoIcon} />
            </ul>
        </div>
    )
}

export default SideBarMiddle;