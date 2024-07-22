const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const goodsRoutes = require('./routes/goodsRoutes')

const connectDB = require('./config/db')


let app = express()

app.use(cors())
app.use(bodyParser.json())

connectDB()

app.use('/api/goods', goodsRoutes)

app.listen(5000, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('http://localhost:5000/')
})




