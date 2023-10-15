const express = require('express');
const notesRouter = require('./routes/notes')
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3003;

//MIDDLEWARE

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', notesRouter);

app.use(express.static('public'));


//HTML ROUTES

    //Route to notes.html

app.get('/notes', (req,res) => {
   res.sendFile(path.join(__dirname, './public/notes.html'));
})

    //Passes string when in the "/" 

app.get('/', (req,res) => res.send('Navigate to /index or /notes'));

    //Route to the landing page(index.html)

app.get('/index', (req, res) => 
   res.sendFile(path.join(__dirname, './public/index.html')));


//-------------------------------//

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);

console.log(PORT);