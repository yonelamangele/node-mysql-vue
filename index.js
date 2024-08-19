import express from 'express'
import cors from 'cors'
import fruitRouter from './routes/fruitRouter.js'
import userRouter from './routes/userRouter.js'

let port = process.env.PORT || 5003

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

app.use('/user', userRouter)
app.use('/fruit', fruitRouter)

app.listen(port, () => {
    console.log('http://localhost:' +port);
})