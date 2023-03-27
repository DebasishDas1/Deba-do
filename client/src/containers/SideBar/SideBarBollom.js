import styles from './sideBar.module.css';

const SideBarBottom = () => {


    const year = new Date().getFullYear()

    return (
        <div className = {styles.SideBar_bottom} >
            Debasish Das © {year}
        </div>
    )
}

export default SideBarBottom;