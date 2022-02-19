const express = require('express');

const log = require('./middlewares/logger');
const cors = require('cors');
const router = require('./routes');
const app = express();
const port = 5555;

app.use(log);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use(router);

app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' not found'
    });
});

// app.listen(5555, () => console.log('Server : Running Success'));
app.listen(process.env.PORT || port, () => console.log('Server : Running Success'));