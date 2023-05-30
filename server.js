const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("🚀 HELLO NODE JS API")
})

app.listen(5000, () => {
    console.log("NODE API APP IS RUNNING ON PORT ");
})