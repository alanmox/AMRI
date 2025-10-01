const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const users = require('./routes/user')
const PORT = 5000


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api',users)


app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`)
})
