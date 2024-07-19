require('dotenv').config();

const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/data', (req, res) => {
    const data = {
      message: 'Hello from the server!',
      apiKey: process.env.API_KEY
    };
    res.json(data);
  });


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });