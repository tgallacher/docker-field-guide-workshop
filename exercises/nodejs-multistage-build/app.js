'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
  res.send(`
    Hello World!

    I have no dependencies in production!!!
  `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
