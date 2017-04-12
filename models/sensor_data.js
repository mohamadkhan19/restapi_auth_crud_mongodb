var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    temperature: {type: Number},
    humidity: {type: Number},
    activity: {type: Number},
    brightness:{type: Number},
    timestamp: {type: Date}
});

module.exports = mongoose.model('Sensor_data', schema,'sensor_data');
