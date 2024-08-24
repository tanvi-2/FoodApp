import dotenv from 'dotenv';
dotenv.config(); 
import mongoose from "mongoose";

export const dbConnection = () => {

const mongoURI = "mongodb+srv://tanvigupta836:GXIF7Ni2pP7bJZHn@cluster0.iieny2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {})
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
  }