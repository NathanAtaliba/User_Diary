import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({

    username: String,
    email: String,
    password: String,
    
  },
{ versionKey: false });

  export default mongoose.model('User', UserSchema);