const express = require('express');
const path = require('path')
const app = express();

// app.get('/', (req,res) => {
// res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })


app.all('*', (req,res) => {
    res.status(400).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

