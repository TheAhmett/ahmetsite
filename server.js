const express = require('express')
const path = require('path')
const app = express()

const host = '0.0.0.0'
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ana.html'))
})



app.listen(port, host, () => {
  console.log(`http://localhost:3000/`)
})
