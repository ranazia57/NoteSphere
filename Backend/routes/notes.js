const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');

//ROUTE 1: Fetch All notes using:GET "/api/notes/fetchallnotes"  Login requaired
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user })
        res.json(notes);

    } catch (error) {
        console.error(error.message),
            res.status(500).send('Something went wrong')
    }
})

//ROUTE 2: Add new notes using:POST "/api/notes/addnotes"  Login requaired
router.post('/addnotes', fetchuser, [
    body('title', 'Title must be a more than 3 chracters.').isLength({ min: 3 }),
    body('description', 'Description is must be more than 5 characters').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors, Return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const notes = new Notes({
            title, description, tag, user: req.user
        })
        const savedNotes = await notes.save();
        res.json(savedNotes);
    } catch (error) {
        console.error(error.message),
            res.status(500).send('Something went wrong')
    }
})


//ROUTE 3: Update notes using:PUT "/api/notes/updatenotes"  Login requaired
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    // Create a new notes object
    const newNotes = {}
    if (title) { newNotes.title = title }
    if (description) { newNotes.description = description }
    if (tag) { newNotes.tag = tag }

    // Find the notes to be updated and update it
    let notes = await Notes.findById(req.params.id)
    if (!notes) {
        return res.status(404).send('notes not found')
    }

    if (notes.user.toString() !== req.user){
        return res.status(401).send('Not allowed to update')
    }

        notes = await Notes.findByIdAndUpdate(req.params.id, newNotes, { new: true })
    res.json(notes)


})


//ROUTE 4: Delete notes using:DELETE "/api/notes/deletenotes"  Login requaired
router.delete('/deletenotes/:id', fetchuser, async (req, res) => {


    // Find the notes to be deleted and delete it
    let notes = await Notes.findById(req.params.id)
    if (!notes) {
        return res.status(404).send('notes not found')
    }
    // Allow deletion ie user own this notes
    if (notes.user.toString() !== req.user){
        return res.status(401).send('Not allowed to update')
    }
    
    notes = await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success":"Note has been deleted.", notes : notes})


})



module.exports = router;