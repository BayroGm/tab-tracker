console.log('greetings from app.js');

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `HAS SIDO REGISTRADO ${req.body.email}!`
    });
});

app.listen(process.env.PORT || 8081);

app.get('/test', (req, res) => {    
    res.send({
        message: 'hello world!'
    });
});