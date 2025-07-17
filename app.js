const express = require('express');
const http = require('http');

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app)

// Serve static files (like index.html)
app.use(express.static('public'));


// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🌐 Web server running on http://localhost:${PORT}`);
});
