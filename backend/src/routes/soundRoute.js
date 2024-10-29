import express from "express";
const router = express.Router();

import { addSounds, getAllSounds, getSoundById, deleteSound } from "../controllers/soundController.js"

router.post('/addTone', addSounds)

router.get('/getTone', getAllSounds)

router.get('/getTone/:id', getSoundById)

router.delete('/deleteTone/:id', deleteSound)

export default router