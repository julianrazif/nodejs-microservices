const app = require('../app')
const http = require('http')
const server = http.createServer(app)

server.listen(app.get('port'), console.log(`server up and running in ${process.env.NODE_ENV} on PORT: ${app.get('port')}`))
