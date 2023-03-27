import AddIcon from '@mui/icons-material/Add';

import styles from './nodeForm.module.css';

const AddNoteButton = ({ addNoteHandler }) => {
    return (
        <div className={styles.form_submit_button}  onClick = {addNoteHandler} >
            <AddIcon /> Add
        </div>
    )
}

export default AddNoteButton;