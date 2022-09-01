const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const authRoutes = require('./Routes/Auth')

app.use('/api',authRoutes)
app.use(morgan('dev'))
app.use(bodyparser.json())
// app.use(cors())
if((process.env.NODE_ENV = 'devolopment')){
  app.use(cors({origin : 'http://localhost:3000'}))
}
const port =  process.env.port || 8000

app.listen(port,()=>{
    console.log(`api was running ${port} ==== deployment]` )
})