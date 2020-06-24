const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

// body parser middlewares (maybe updated way to do this)
app.use(bodyParser.json())


// config db 
const db = require("./config/keys").mongoURI

// connect to mongoDB
mongoose.connect(db,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(() => console.log("connected to db"))
.catch(err => console.log(err))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server listening to port ${5000}`))