const mongoose = require('mongoose')


module.exports.connectDB=async()=>{
    try {
       await mongoose.connect(
            process.env.MONGODB_URI, 
        ).then(() => {
            console.log(`Connected to the database ${process.env.DB_NAME}`);
          }).catch(err => console.error(err))
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    }
}

