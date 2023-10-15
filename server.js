const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./public/js/uuid');
const db = require('./db/db.json');
const {readFromFile, readAndAppend, writeToFile} = require('./public/js/helper');

const app = express();

const PORT = process.env.PORT || 3003;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

//GET REQUEST

app.get('/api/notes', (req,res) => {
res.json(db);
});


//POST REQUEST

app.post('/api/notes.html', (req, res) => {
   console.info(req.rawHeaders);
   console.info(`${req.method} request received`);

   const {title, text, id} = req.body;

   if (req.body) {
   const newNote = {
    title,
    text,
    id: uuid()
   };

//PUSHES NEW NOTES TO THE SIDEBAR

   db.push(newNote);
   readAndAppend(newNote, './db/db.json');
   res.json('Note added!');
   } else {
      res.error('Something went wrong.')
   }
});

//DELETE REQUEST (NOT YET FUNCTIONAL)

app.delete('/db/db.json:id', (req, res) => {

})

//--------------------------//

//HTML ROUTES

app.get('/notes', (req,res) => {
   res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/', (req,res) => res.send('Navigate to /index or /notes'));

app.get('/index', (req, res) => 
   res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req,res) =>
   res.sendFile(path.join(__dirname, './public/notes.html')));

//-------------------------------//

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);

console.log(PORT);