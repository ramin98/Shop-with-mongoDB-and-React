const mongoose = require('mongoose')

let goodsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    storeName: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Goods', goodsSchema)