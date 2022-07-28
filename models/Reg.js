const mongoose = require('mongoose');
// const notice = require('passport-local-mongoose');
const regSchema = new mongoose.Schema({
    Username: {
        type:String,
        trim:true
    },
    email: {
        type:String,
        trim:true,
        required: 'please enter valid email'
    },
    password:{
        type:String,
        trim:true
    }
})
// regSchema.plugin(notice,{usernameField: 'email'});
// exporting schema
module.exports = mongoose.model('Reg',regSchema);