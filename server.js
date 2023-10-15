const express = require('express');
const notesRouter = require('./routes/notes')
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3003;

//MIDDLEWARE

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/notes', notesRouter);

app.use(express.static('public'));


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