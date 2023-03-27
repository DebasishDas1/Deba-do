import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Selector from '../../components/Selector';
import AddNoteButton from './AddNoteButton';
import { addNote } from '../../store/noteSlice';

import styles from './nodeForm.module.css';

const Notes = () => {
    const dispatch = useDispatch();
    const [ tage, setTage ] = useState(); 
    const [ difficulty, setDifficulty ] = useState()

    const tageList = ['Work', 'Exercise', 'Teams', 'Creativity', 'Fun'];
    const difficultyList = ['Trivial', 'Easy', 'Medium', 'Hard'];

    const [note, setNote] = useState({
        time: 0,
        title: '',
        tage: '',
        difficulty: '',
        noteMessage: ''
    });

    const updateNote = (event) => {
        const now = new Date().getTime()
        const { name, value } = event.target;

        setNote( oldData => {
            return {
                ...oldData,
                [name]: value,
                time: now,
                tage,
                difficulty,
            }
        })
    }

    const onSubmit = () => {        
        dispatch( addNote( note ) );
        setNote({ title: '', noteMessage: '' });
    }

    return (
            <div className={styles.form_contaner} >
                <input 
                    type='text' 
                    name= 'title'
                    value ={note.title} 
                    onChange = {updateNote}  
                    placeholder = 'Write note title' 
                />

                <textarea 
                    row='' 
                    column='' 
                    name= 'noteMessage'
                    value ={note.content} 
                    onChange = {updateNote} 
                    placeholder= 'Write your note...' 
                />

                <Selector 
                    type='Difficulty'  
                    option='Easy' 
                    action = {setDifficulty}
                    optionList={difficultyList} 
                />

                <Selector 
                    type='Tage'  
                    option='Fun' 
                    action = {setTage}
                    optionList={tageList} 
                />

                <AddNoteButton addNoteHandler = {onSubmit}/>
            </div>
    )
};
 
export default Notes ;