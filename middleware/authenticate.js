import { compare } from "bcrypt"
import { getUserDB } from "../model/userDB.js";
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

const checkUser = async(req,res,next) => {
    const {username,password} = req.body;
    let hashedPassword = (await getUserDB(username)).password
    
    let result = compare(password, hashedPassword, (err,result) => {
        if(result==true) {
            let token = jwt.sign({username:username}, process.env.SECRET_KEY,
                {expiresIn:'1h'})
                console.log(token);
                req.body.token = token
            next()
            return
        }
        res.send('Password incorrect')
    })
}

const verifyAToken = (req,res,next) => {
    let {cookie} = req.headers

        let token = cookie && cookie.split('=') [1]
        // console.log(token);
        jwt.verify(token, process.env.SECRET_KEY,(err, decoded) => {
                if(err) {
                    res.json({message: 'Token has expired'})
                    return
                } else {
                    req.body.username = decoded.username
                    // console.log(decoded);
                    next()
                }
        })
        
    }


export {checkUser, verifyAToken}