const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/merren').then(()=>{
    console.log("database connection successfull");
}).catch((error)=>{
    console.log(`database not connected:${error}`);
})