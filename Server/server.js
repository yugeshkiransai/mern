const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

//CONNECT TO DB

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

const authRoutes = require('./Routes/Auth')

app.use('/api',authRoutes)
app.use(morgan('dev'))
app.use(bodyParser.json())
// app.use(cors())
if((process.env.NODE_ENV = 'devolopment')){
  app.use(cors({origin : 'http://localhost:3000'}))
}
const port =  process.env.port || 8000

app.listen(port,()=>{
    console.log(`api was running ${port} ==== deployment]` )
})