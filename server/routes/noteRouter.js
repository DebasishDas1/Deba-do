import express from "express";

import { getNote, createNote } from "../controllers/noteController.js";

const router = express.Router();

router.get('/get', getNote);
router.post('/addNote', createNote);

export default router