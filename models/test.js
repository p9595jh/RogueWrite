const mongoose = require('mongoose');
const config = require('../config/database');

// Sub Schema
const testSchema = mongoose.Schema({
    a: Number,
    b: Array
});

const Test = module.exports = mongoose.model('Test', testSchema);

module.exports.add = function(test, callback) {
    test.save(callback);
}
