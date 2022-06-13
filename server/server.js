import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv'

import bodyParser from "body-parser";
import nodemailer from "nodemailer";
dotenv.config();


import aboutRouter from './routers/aboutRouter.js';

const app = express()

const port = process.env.PORT || 4000;

app.use(express.json({ limit: '20mb' }));
app.use('/about', aboutRouter);
app.use(cors());
/* app.get('/', (req, res) => {
    res.json({ message: '5000. porta yapilan get istegi' })
}) */

/* Set the Nodemailer from youtube - Send Email From ReactJS and Node App -starts*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//app.use(cors({credentials: true, origin: 'https://halil-portfolio-webside.netlify.app'}))



/* let testAccount = await nodemailer.createTestAccount(); */

app.post("/send_mail", cors(), async (req, res) => {
    let { firstN, lastN, phoneN, email, subjectText, message } = req.body

    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "halil@esmer.de",
        subject: `${subjectText}`,
        html: `<div style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>'You have a Message from ${firstN} ${lastN}'</h2>
        <p>First and Lastname: ${firstN} ${lastN}</p>
        <p>Phone: ${phoneN}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    
         </div>
    `
    })
})
/* Set the Nodemailer from youtube - Send Email From ReactJS and Node App -ends*/

app.listen(port, () => {
    console.log(`port ${port} connected`);

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,

    }).then(() => console.log('database connected'))
        .catch((err) => console.log(err))

}) 
