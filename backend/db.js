const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://foodwheels:sumit@cluster0.sywzdnp.mongodb.net/foodwheels?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI);
        console.log('Mongo connected');

        const FoodItem = mongoose.model('foodwheels', new mongoose.Schema({}));
        const fetchedData = await FoodItem.find({});

        if (fetchedData.length > 0) {
            global.foodwheels = fetchedData;
        } else {
            console.log('No data found for foodwheels');
        }

        const FoodCategory = mongoose.model('foos', new mongoose.Schema({}));
        const catData = await FoodCategory.find({});

        if (catData.length > 0) {
            global.foodCategory = catData;
        } else {
            console.log('No data found for foodCategory');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = mongoDB;
