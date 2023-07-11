import { useDispatch } from 'react-redux';
import { updatePageTitle } from '../../store/pageSlice';

import { NavLink } from 'react-router-dom';

const SideBarMiddleOption = ({ to, Icon, title }) => {
    const dispatch = useDispatch();

    // const checkActive = ({ isActive }) => {
    //     isActive && { color: 'black' }
    // }

    return (
        <li onClick={() => dispatch(updatePageTitle({ title }))} >
            <NavLink
                to={to}
                style={({ isActive }) => (isActive ? { color: 'black' } : { color: 'gray' })}
            // style={checkActive}
            >
                <Icon /> {title}
            </NavLink>
        </li>
    )
}

export default SideBarMiddleOption;