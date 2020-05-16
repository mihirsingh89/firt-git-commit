const express = require('express');
const app = express();

//routes
app.get('/create', (req, res) => {
    res.send("Mihir-Pc create");
    console.log('Mihir-Pc Create');
});

app.get('/delete', (req, res) => {
    res.send("delete");
    console.log('Mihir-Pc Delete');
});

//Listening to the server
app.listen(3000, () => {
    console.log("started");
});