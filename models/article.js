const mongoose = require('mongoose')

const Schema = mongoose.Schema


const artcleSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    }

}, { timestamps: true })


module.exports = mongoose.model('Article', artcleSchema)