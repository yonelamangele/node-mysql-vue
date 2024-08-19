 import {pool} from '../config/config.js'

const getUsersDb = async () => {
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDB = async (username) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    return data
}

const insertUserDb = async(name, surname, age, fav_coding_lang, fav_car, eye_color, username, password) => {
    let [data] = await pool.query(`
        INSERT INTO users (name, surname, age, fav_coding_lang, fav_car, eye_color, username, password) VALUES  (?, ?, ?, ?, ?, ?, ?, ?)
        `, [name, surname, age, fav_coding_lang, fav_car, eye_color, username, password])
}

const deleteUserDb = async(id) => {
    let [data] = await pool.query('DELETE FROM users WHERE user_id = ?', [id])
    return data
 }

const updateUserDb = async(name, surname, age, fav_coding_lang, fav_car, eye_color, id) => {
    let [data] = await pool.query('UPDATE users SET user_name = ?, user_surname = ?, user_age = ?, user_fav_coding_lang = ?, user_fav_car = ?, user_eye_color = ? WHERE peers_id = ?', [name, surname, age, fav_coding_lang, fav_car, eye_color, id])
    // return data
}

export {getUsersDb, getUserDB, insertUserDb, deleteUserDb, updateUserDb}