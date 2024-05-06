import mongoose from 'mongoose';

async function DatabaseConnection(){
    mongoose.connect('mongodb://127.0.0.1:27017/Users')
    .then(() => console.log('Connected!'));
} 

export default DatabaseConnection;