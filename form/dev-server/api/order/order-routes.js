import express from 'express';
const router  = express.Router();
import * as controller from './order-controller';

//create new order
/*router.post('/order', (req,res)=>{
    res.send('post.order - create an order - not yet implemented');
});*/

router.post('/order', controller.index);

//get orders
router.get('/order', (req,res)=>{
    //res.send('get.order - get all orders - not yet implemented');
    res.json({message: "get.order - get all orders - not yet implemented"});
});

export default router;