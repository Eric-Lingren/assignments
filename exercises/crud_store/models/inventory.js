const mongoose = require('mongoose');


const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    inStock: {
        type: Boolean
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)