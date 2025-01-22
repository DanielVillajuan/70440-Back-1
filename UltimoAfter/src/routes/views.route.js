import { ProductManager } from '../Dao/Product.js';
import { chatModel } from '../Dao/models/Chat.model.js';
import { productModel } from '../Dao/models/Product.model.js';
import { socketServer } from '../app.js';
import { __dirname } from '../utils.js';
import { Router } from 'express';
const router = Router();
const productList = new ProductManager(__dirname + '/data/databaseproducts.json');

router.get('/', async (req, res) => {
    const list = await productList.getProducts();

    res.render('index', { list })
});

router.get('/carts/:cid', (req, res) => {
	const { cid } = req.params
	res.render('carts', {
		cid
	})
})

router.get('/products', (req, res) => {
    res.render('products')
})
router.get('/realtimeproducts', async (req, res) => {
    const list = await productList.getProducts();

    res.render('realTimeProducts', { list })
});

router.get('/chats', async (req, res) => {
    const results = await chatModel.find().lean()

    res.render('chats', { messagesContainer: [...results] })
});

export default router
