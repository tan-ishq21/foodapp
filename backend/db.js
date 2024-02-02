const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://foodwheels:sumit@cluster0.sywzdnp.mongodb.net/foodwheels?retryWrites=true&w=majority'


const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
        const FoodCategory = mongoose.model('foodwheels', new mongoose.Schema({}));
        const fetchedData = await FoodCategory.find({})
    }
    catch(error) {
        console.log(error)
    }
    }

module.exports = mongoDB;