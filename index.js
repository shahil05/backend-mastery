const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('home route working');
});
app.get('/about', (req, res) => {
    res.send("this is my backend jounrey")
});
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});