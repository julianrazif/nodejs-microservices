const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
app.set('port', PORT)

app.listen(app.get('port'), console.log(`server up and running in ${process.env.NODE_ENV} on PORT: ${app.get('port')}`))

module.exports = app
