import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import toolsRoute from './routes/toolsRoute.mjs'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    console.log(req)
    res.status(200).send('AI Tools Explorer App')
});

app.use('/tools', toolsRoute)

mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });