import express from 'express'
import { fetchFruits, fetchFruit, insertFruit, deleteFruit, updateFruit, addToCart } from '../controller/fruitController.js'
import { verifyAToken } from '../middleware/authenticate.js'


const router = express.Router()

router.post('/cart', verifyAToken, addToCart)

router.
    route('/')
        .get(fetchFruits)
        .post(insertFruit)

router.
    route('/:id')
        .get(fetchFruit)
        .delete(deleteFruit)
        .patch(updateFruit)

export default router