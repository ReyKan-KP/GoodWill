const mongoose = require('mongoose');


const connectToMongo = async()=>{
    console.log("chal na");
       mongoose.set('strictQuery', false);
        try {
            const mongoURI = "mongodb://0.0.0.0:27017/NGO_MARKET_PLACE"
            await mongoose.connect(mongoURI);
            console.log("connected to mongodb");
        }
        catch (error) {
            console.log(error);
        }

}

module.exports = connectToMongo;
