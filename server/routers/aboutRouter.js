import express from "express";
import mongoose from "mongoose";
import AboutModel from "../db/aboutModel.js";
const router = express.Router();

//get all about from database
router.get('/', async (req, res) => {
    try {
        const about = await AboutModel.find()

        res.status(200).json(about)

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

//get single about from database
/* router.get('/:id', async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: 'About is not valid' })

            const about = await AboutModel.findById(id);
            if (!about) return;

            res.status(200).json(about);
        }
    } catch (error) {
        res.status(404).json({ message: 'About not found' });
    }

}) */

//creat a about
router.post('/', async (req, res) => {
    try {
        const about = req.body;
        const createAbout= await AboutModel.create(about);
        res.status(201).json(createAbout);

    } catch (error) {
        console.log(error.message);
        res.json({ message: 'Create the message failed' })
    }
})
//update a about
router.put('/:id', (req, res) => {
    res.json({ message: 'update a about' })
})

//delete a about
router.delete('/:id', (req, res) => {
    res.json({ message: 'deleted a about' })
})

export default router
