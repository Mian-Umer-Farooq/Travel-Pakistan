var mongoose = require('mongoose')

const citySchema = { Name: String }

const cities = mongoose.model('cities', citySchema);

module.exports = cities