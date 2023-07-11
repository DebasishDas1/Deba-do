import axios from 'axios';

const url = 'http://localhost:6001';

const fetchNotes = async () => {
    try {
        const res = await axios.get(`${url}/note/addNote`);

        return res.data;

    } catch (error) {
        return error.message;
    }

};

const addNewNote = async (notePaylode) => {
    const { time, title, noteMessage } = notePaylode;

    const updatedData = {
        title,
        message: noteMessage,
        creater: 'Debasish',
        tags: ['work'],
        selectedFile: '',
        importanceCount: '2',
        crtatedAt: time,
    }

    try {
        const res = await axios.post(`${url}/note/addNote`, updatedData, {});
        console.log(res);

    } catch (error) {
        return error.message;
    }
};

export { fetchNotes, addNewNote };
