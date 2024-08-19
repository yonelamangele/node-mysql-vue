import {pool} from '../config/config.js'

const getFruitsDb = async () => {
    let [data] = await pool.query('SELECT * FROM fruits')
    return data
}

const getFruitDB = async  (id)=>{
    let [[data]] = await pool.query('SELECT * from fruits WHERE id=?',[id])
    return data
}

const insertFruitDB = async (fruit_name, weight, amount)=>{
    let [data] = await pool.query('INSERT INTO fruits (fruit_name, weight, amount) VALUES (?,?,?)',[fruit_name, weight, amount])
    return data
}

const deleteFruitDB = async(id)=>{
    await pool.query('DELETE from fruits WHERE id=?',[id])
}

const updateFruitDB = async(fruit_name,weight,amount,id)=>{
    let [data] = await pool.query('UPDATE fruits SET fruit_name =?,weight=?,amount=? WHERE id=?',[fruit_name,weight,amount,id])
    return data
}

const addToCartDB = async (fruit_id, user_id) => {
    await pool.query('INSERT INTO cart (fruit_id, user_id) VALUES (?,?)', [fruit_id, user_id])
}

export {getFruitDB, getFruitsDb, insertFruitDB, deleteFruitDB, updateFruitDB, addToCartDB}