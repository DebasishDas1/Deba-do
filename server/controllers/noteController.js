import noteMessage from '../models/noteModel.js'

const createNote = async (req, res) => {
    const note = req.body;
    const newNote = new noteMessage(note);
    
    try {
        await newNote.save();

        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const getNote = async (req, res) => {
    try {
        const noteMessages = await noteMessage.find();
        console.log(noteMessages);

        res.status(200).json(noteMessages)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export { createNote, getNote }