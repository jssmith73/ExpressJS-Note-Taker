const express = require('express');
const uuid = require('../public/js/uuid');
const fs = require('fs');
const db = require('../db/db.json');
const {readFromFile, readAndAppend, writeToFile} = require('../public/js/helper');

const notes = require('express').Router();

app = express();

//GET REQUEST

notes.get('/notes', (req,res) => {
    res.json(db);
    });

//POST REQUEST

notes.post('/notes.html', (req, res) => {
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
 
 notes.delete('/db/db.json:id', (req, res) => {
 
 })
 
 //--------------------------//    


module.exports = notes;