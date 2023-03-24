import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-route';
dotenv.config();
const app = express();


app.use('/user', userRouter);

mongoose.connect(`mongodb+srv://kenneth:${process.env.MONGODB_PASSWORD}@cluster0.uzm9gij.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Listening to 5000!");
    })
})
.catch((e)=>{
    console.log(e);
})

app.use('/', (req, res, next)=>{
    res.send('Hello');
});


