const express = require('express');
const path = require('path');

const app = express();

const PORT = 3003;

app.use(express.static('public'));

app.get('/', (req,res) => res.send('Navigate to /index or /notes'));

app.get('/index', (req, res) => 
   res.sendFile(path.join(__dirname, '/index.html')));

app.get('/notes', (req,res) =>
   res.sendFile(path.join(__dirname, '/notes.html')));

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);

console.log(PORT);