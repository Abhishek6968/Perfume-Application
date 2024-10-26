const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const productModel=require('../models/productData')
router.get('/',async(req,res)=>{
    try{
        const data=await productModel.find();
        res.status(200).json(data);
}
catch(err){
    res.status(404).json({ message: 'Data not found' });
}
});

router.get('/:id', async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

router.post('/add',async(req,res)=>{
    try{
        const item=req.body;
        const data=await productModel.insertMany(item);
        res.status(200).json({ message: 'Post successful'});

    }
    catch (err) {
        res.status(400).json({ error: 'Error: ' + err.message });
      }
});
router.put('/update/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        await productModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('edit sucessful');
    }
    catch(err){
        res.status(404).send('edit unsuccessful')
    }
});
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        await productModel.findByIdAndDelete(id,req.body);
        res.status(200).send('Delete Successful');
    }
    catch(err){
        res.status(404).send('Delete Unsuccessful')
    }
    });

module.exports=router;