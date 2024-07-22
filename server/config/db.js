const mongoose = require('mongoose')


const connectDB = async () => {
    try{
        let connect = await mongoose.connect('mongodb://localhost:27017/goods-db')
        console.log('mongodb://localhost:27017/goods-db is work')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB