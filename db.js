const mongoose = require('mongoose');

async function connectdb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);  
        console.log("connected the mongodb");
    } catch (error) {
        console.log(error);
    }
}
module.exports= {connectdb};