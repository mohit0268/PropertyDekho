import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery',true);
    if(connected){
        console.log("database is connnected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        connected = true;
        
    } catch (error) {
        console.log('Error',error);
    }
}

export default connectDB;