const express = require('express');
const path = require('path')

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "indexnode.html")); 
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);