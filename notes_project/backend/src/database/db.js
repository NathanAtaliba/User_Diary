import mongoose from 'mongoose';

async function DatabaseConnection(){
    mongoose.connect('mongodb://mongo:27017/Users')
    .then(() => console.log('Connected!'));
} 

export default DatabaseConnection;