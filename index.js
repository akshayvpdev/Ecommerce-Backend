const express = require('express')
const app = express()
require("dotenv").config(); 
const db=require('./Config/DBConnection')
app.use(express.urlencoded({ extended:true}))
app.use(express.json())


db.connectDB()


app.use("/auth", require("./Routes/authRoutes"))






app.get('/', (req, res) => {
  res.send('hello world')
})

const port = process.env.PORT ||3002

app.listen(port,()=>{
    console.log('server running on port 3000')
})