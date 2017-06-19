const express = require('express');
const path = require('path');
const router = express.Router();
const jsonFile = require('jsonfile');
const dataLocation = '../../data/';

const axios = require('axios');
const API = 'http://jsonplaceholder.typicode.com';
const LocalHost = 'http://localhost:3000';

router.get('/', (req, res) => {
    res.send("api works");
});

router.get('/posts', (req, res) => {
    axios.get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

router.get('/data', (req, res) => {
    var id = parseInt(req.query['id']);
    
    var fileName = `data${id}.json`;

    console.log(`${dataLocation}${fileName}`);

    jsonFile.readFile(`${dataLocation}${fileName}`, function(err, object){
        console.log(object);
    });
});

module.exports = router;