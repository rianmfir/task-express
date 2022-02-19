const router = require('express').Router();
const fs = require('fs');
const dummy = require('./dummy.json')

router.get('/', (req, res) => {
    let data = {
        status: 200,
        message: "Success",
        data: dummy
    }
    res.json(data);
});

router.get('/genre/:genre', (req, res) => {
    let data = dummy.filter((e) => e.genre.toLowerCase().includes((req.params.genre).toLowerCase()));

    if (data.length === 0) {
        data = {
            status: 400,
            message: "Data Not Found",
            data: []
        }
    }
    res.json(data);
});

router.get('/title/:title', (req, res) => {
    let data = dummy.filter((e) => e.title.toLowerCase().includes((req.params.title).toLowerCase()));

    if (data.length === 0) {
        data = {
            status: 400,
            message: "Data Not Found",
            data: []
        }
    }
    res.json(data);
});

module.exports = router;