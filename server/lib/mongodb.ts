// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGO_URI;  

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGO_URI environment variable.');
// }

// async function connectToDatabase() {
//   if (mongoose.connection.readyState === 1) {
//     console.log('Already connected to the database.');
//     return mongoose;
//   }

//   const opts = {
//     bufferCommands: false, 
//   };

//   try {
//     console.log('Connecting to MongoDB...');
//     await mongoose.connect(MONGODB_URI, opts);
//     console.log('Connected to MongoDB');
//     return mongoose;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     throw new Error('Failed to connect to MongoDB');
//   }
// }

// export default connectToDatabase;
