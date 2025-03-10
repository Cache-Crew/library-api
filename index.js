import express from 'express';
import mongoose from 'mongoose';

// make database 
await mongoose.connect(process.env.MONGO_URI);

 
// create an express app
const app = express();
// Use global middle wares
app.use (express.json())

// use routes
// app.use(libraryRouter);



// Listen for incoming request

app.listen(3000, ()=>{
  console.log('Server listening on port 3000')
})