import express from 'express';
import User from '../models/userModel';
import cors from 'cors';
import { getToken } from '../util';
// import getToken from '../util';
const router = new express.Router();
router.post("/signin", async(req, res)=>{
    try{
    //    console.log(req);
    const userSigin =await User.findOne({
        email: req.body.email,
        password:req.body.password
        // email:"preethi@gmaild.com",
        // password:"1234"
    });
    // res.send(
    //      req.body
    // );
    if(userSigin){
        res.send({
            '_id':userSigin.id,
            'name':userSigin.name,
            'isAdmin': userSigin.isAdmin,
            'email':userSigin.email,
            'token':getToken(userSigin)
        }); 
    }
    res.send({ message: 'Invalid Email or Password.' });
    }catch(error){
        res.send({ message: error.message });
    }
});
router.post('/register', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
  });

router.get("/createadmin", async(req, res)=>{
    try{
        const user =new User({
            name: 'Preethi',
            email:'preethi1233@gmail.com',
            password: '1234',
            isAdmin: true
        });
        const newUser= await user.save();
    
        res.send(newUser);

    }catch(error){
        res.send({ message: error.message });
    }
    

})
export default router;