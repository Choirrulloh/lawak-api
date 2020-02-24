const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/', (req, res) => {
    let rawdata = fs.readFileSync('jokes.json');
    const jokes = JSON.parse(rawdata);

    const joke = jokes[Math.floor(Math.random() * jokes.length)]

    res.send({
        type: 'chat',
        body: joke
    })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))