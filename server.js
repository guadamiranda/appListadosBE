const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
const port = 3001

app.use(cors())
app.use('/',routes)

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  })

module.exports = app