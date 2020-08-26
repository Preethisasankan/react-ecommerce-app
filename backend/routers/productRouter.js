import express from 'express';
import Product from '../models/productModel';
import { isAuth,isAdmin } from '../util';
// import getToken from '../util';
const router = new express.Router();
router.get("/", async(req, res)=>{
    try{
    //    console.log(req);
    const products =await Product.find({
    });
    if(products){
        res.send(products); 
    }
    res.send({ message: 'No Products' });
    }catch(error){
        res.send({ message: error.message });
    }
});
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    // image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});

// router.get("/createadmin", async(req, res)=>{
//     try{
//         const user =new User({
//             name: 'Preethi',
//             email:'preethi1233@gmail.com',
//             password: '1234',
//             isAdmin: true
//         });
//         const newUser= await user.save();
    
//         res.send(newUser);

//     }catch(error){
//         res.send({ message: error.message });
//     }
    

})
export default router;