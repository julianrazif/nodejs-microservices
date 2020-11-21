const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
app.set('port', PORT)

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'this is server 01' })
})

module.exports = app
