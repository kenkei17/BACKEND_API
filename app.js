import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-route';
dotenv.config();
const app = express();

//middleware
app.use(express.json());

app.use('/user', userRouter);


mongoose.connect(`mongodb://127.0.0.1:27017/capstoneDB`)
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Listening to 5000!");
    })
})
.catch((e)=>{
    console.log(e);
})

// app.use('/', (req, res, next)=>{
//     res.send('Hello');
// });


