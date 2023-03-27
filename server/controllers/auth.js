import bcrypt from 'bcrypt';
import jwt from 'json-web-token';
import user from '../models/userModel.js'; 

// ragister user
const registerUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            tag,
            location,
            contact
        } =  req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new user({
            firstName,
            lastName,
            email,
            password : passwordHash,
            tag,
            location,
            contact
        })
        const saveUser = await newUser.save();

        res.status(201).json(saveUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }   
};

export { registerUser };