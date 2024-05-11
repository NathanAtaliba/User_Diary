import mongoose from 'mongoose';

async function DatabaseConnection(){
    mongoose.connect('mongodb://localhost:27017/Users')
    .then(() => console.log('Connected!'));
} 

export default DatabaseConnection;