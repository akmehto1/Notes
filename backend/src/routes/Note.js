// const express = require('express');
// const router = express.Router();

// const Note = require('./../models/Note');

// router.post("/list", async function(req, res) {
//     var notes = await Note.find({  });
//     res.json(notes);
// });

// router.post("/add", async function(req, res) {       
    
//     // await Note.deleteOne({ id: req.body.id });
// console.log(req.body);
//     const newNote = new Note({
//         id: req.body.id,
//         userid: req.body.userid,
//         title: "temp",
//         content: req.body.content
//     });

//     // console.log(req.body);
//     // const newNote = new Note({
//     //     id: "12345",
//     //     userid: "a.kmehto",
//     //     title: "new data",
//     //     content: "this is dummy data"
//     // });
//     await newNote.save();

//     const response = { message: "New Note Created! " + `id: ${req.body.id}` };
//     res.json(response);

// });

// router.post("/delete", async function(req, res) {
//     await Note.deleteOne({ id: req.body.id });
//     const response = { message: "Note Deleted! " + `id: ${req.body.id}` };
//     res.json(response);
// });

// module.exports = router;



const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');

router.use(express.json()); // Add this line to parse JSON request bodies

router.post("/list", async function(req, res) {
    var notes = await Note.find({});
    res.json(notes);
});

router.post("/add", async function(req, res) {
    console.log(req.body);
    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: "temp",
        content: req.body.content
    });

    await newNote.save();

    const response = { message: "New Note Created! " + `id: ${req.body.id}` };
    res.json(response);
});

router.post("/delete", async function(req, res) {
    await Note.deleteOne({ id: req.body.id });
    const response = { message: "Note Deleted! " + `id: ${req.body.id}` };
    res.json(response);
});

module.exports = router;
