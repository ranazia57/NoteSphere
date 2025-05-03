const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/NoteSphere';

const connectToMongo = async () => {
    
        await mongoose.connect(mongoURI); 
            console.log('connected to DB successfully')
  
};

module.exports = connectToMongo;
