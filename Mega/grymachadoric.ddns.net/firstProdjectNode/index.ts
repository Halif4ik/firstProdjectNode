const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const  helloMSG = 'fiveFive';
    res.send(helloMSG)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})