import styles from './sideBar.module.css';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { updatePageTitle } from '../../store/pageSlice';

import { NavLink } from 'react-router-dom';

const SideBarMiddle = () => {
    const dispatch = useDispatch();

    return (
        <div className = {styles.SideBar_middle} >
            <ul>
                <li onClick={ () => dispatch( updatePageTitle( 'Home' )) }  >
                    <NavLink to="/" >
                         <OtherHousesIcon /> Home
                    </NavLink>
                </li>
                <li onClick={ () => dispatch( updatePageTitle( 'Notes' )) } >
                     <NavLink to="/Notes" >
                          <NoteAltIcon /> Notes
                    </NavLink>
                </li>
                <li onClick={ () => dispatch( updatePageTitle( 'Trash' )) } >
                    <NavLink to="/Trash" >
                         <DeleteIcon /> Trash
                    </NavLink>
                </li>
                <li onClick={ () => dispatch( updatePageTitle( 'About' )) } >
                    <NavLink to="/About" >
                         <InfoIcon />About
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBarMiddle;