import {getFruitsDb, getFruitDB, insertFruitDB, deleteFruitDB, updateFruitDB, addToCartDB} from '../model/fruitDB.js'
import { getUserDB } from '../model/userDB.js'

const fetchFruits = async (req,res) => {
    res.json(await getFruitsDb())
}

const fetchFruit = async(req,res)=>{
    res.json(await getFruitDB(req.params.id))
}
const insertFruit = async (req,res) => {
    let {fruit_name,weight,amount} = req.body
    await insertFruitDB(fruit_name,weight,amount)
    res.send('Inserted data sucessfully')
}
const deleteFruit = async (req,res) => {
    res.json(await deleteFruitDB(req.params.id))
    console.log('Deleted successfully');
}
const updateFruit = async (req,res) => {
    let {fruit_name,weight,amount} = req.body
    let fruits = await updateFruitDB(req.params.id)
    fruit_name?fruit_name=fruit_name:fruit_name=fruits.fruit_name
    weight?weight=weight:weight=fruits.weight
    amount?amount=amount:amount=fruits.amount
    res.json(await updateFruitDB(fruit_name,weight,amount,req.params.id))
}

const addToCart = async (req,res) => {
    console.log(req.body);

    let {id} = await getUserDB(req.body.username)
    console.log(id);
    
    // await addToCartDB(req.body.id)
    res.json({message: "You've added an item to cart"})
}

export {fetchFruits, fetchFruit, insertFruit, deleteFruit, updateFruit, addToCart}
