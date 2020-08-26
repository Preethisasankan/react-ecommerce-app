import express, { Router } from 'express';
import data from './data';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRouter from './routers/UserRouter';
import bodyParser from 'body-parser';

dotenv.config();
const MONGODB_URL= config.MONGODB_URL;
mongoose.connect(MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch((error) => console.log(error.reason));

const app = express();
app.use(cors());
// capp.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// userRouter.use(bodyParser.json());
app.use(bodyParser.json());
app.use("/api/users",userRouter);

app.get("/api/products",cors(),(req, res) =>{
    res.send(data.products);
});
app.get("/api/products",cors(),(req, res) =>{
    res.send(data.products);
});
app.get("/api/product/:id",cors(),(req, res) =>{
    const productId= req.params.id;
    const product = (data.products.find((x) => x._id ===productId));
    if(product)
    res.send(product);
    else
    res.status(404).send({msg:"product not found"});
});
app.listen(5000, ()=>{console.log('kkkkkk')});