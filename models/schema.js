const mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    }
});

let userModel = new mongoose.model('users',userSchema);

module.exports = {
    userModel
}