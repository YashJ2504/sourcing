const mongoose = require('mongoose')
const mongodb = require('mongodb')

mongoose.connect('.', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})