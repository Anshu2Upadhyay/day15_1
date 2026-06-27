const mogoose = require('mongoose');
const studentSchema = new mogoose.Schema({

}, {
    timestamps: true
});

module.exports = mogoose.model('Student', studentSchema({
    name:{},
    email:{},
    city:{},
    age:{},
}, {
    timestamps: true
}));

module.exports = mogoose.model('Student', studentSchema);