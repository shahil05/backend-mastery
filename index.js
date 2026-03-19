const express = require('express');
const app = express();

const PORT = 3000;

// Middleware
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Import routes
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});