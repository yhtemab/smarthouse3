const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/living-room.html', (req, res) => {
  res.sendFile(__dirname + '/views/living_room.html');
});

app.get('/kitchen.html', (req, res) => {
  res.sendFile(__dirname + '/views/kitchen.html');
});

app.get('/toilet.html', (req, res) => {
  res.sendFile(__dirname + '/views/toilet.html');
});

app.get('/bathroom.html', (req, res) => {
  res.sendFile(__dirname + '/views/bathroom.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
