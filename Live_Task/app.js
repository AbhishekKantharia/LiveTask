import { Router } from 'express';
const router = Router();
import { find } from '../models/Product';

//Get all Products
router.get('/', async(req,res) => {
    try{
        const products = await find();
        res.json(products);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;