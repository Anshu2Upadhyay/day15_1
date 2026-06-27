const mogoose = require('mongoose');
const studentSchema = new mogoose.Schema({

}, {
    timestamps: true
});

module.exports = mogoose.model('Student', studentSchema);