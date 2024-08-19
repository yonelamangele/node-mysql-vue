import { getUsersDb, getUserDB, insertUserDb, deleteUserDb } from '../model/userDB.js'
import {hash} from 'bcrypt'

const fetchUsers = async (req,res) => {
    res.json(await getUsersDb())
}
const fetchUser = async (req,res) => {
    res.json(await getUserDB(req.params.id))
}
const insertUser = async (req,res) => {
    
    let {cookie} = req.headers
    console.log(cookie);
    
    
    let {name, surname, age, fav_coding_lang, fav_car, eye_color, username, password} = req.body
    // console.log(req.body);
    
    hash(password, 10, async (err,hashedP) => {
        if (err) throw err
        console.log(hashedP);
        
        await insertUserDb(name, surname, age, fav_coding_lang, fav_car, eye_color, username, hashedP)
    })
    res.send('Data was inserted successfully')
}
const deleteUser = async (req,res) => {
    await deleteUserDb(req.params.id)
    res.send('User has been deleted')
}
const updateUser = async (req,res)=>{
    let {name,surname,age,fav_coding_lang,fav_car,eye_color} = req.body
    let users = await updateDb(req.params.id)
    name?name=name:name=users.name
    surname?surname=surname:surname=users.surname
    age?age=age:age=users.age
    fav_coding_lang?fav_coding_lang=fav_coding_lang:fav_coding_lang=users.fav_coding_lang
    fav_car?fav_car=fav_car:fav_car=users.fav_car
    eye_color?eye_color=eye_color:eye_color=users.eye_color
    res.json(await updateDb(name, surname, age, fav_coding_lang, fav_car, eye_color, req.params.id))
}

const loginUser = (req,res) => {
    res.json({
        message: "You have signed in!!",
        token:req.body.token
    })
}

export {fetchUsers, fetchUser, insertUser, deleteUser, updateUser, loginUser}