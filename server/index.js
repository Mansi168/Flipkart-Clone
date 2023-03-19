import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';

import router from './routes/route.js';


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true})); //jo body aati h(request aati h that is post data ki body) wo json form m aati h
app.use(bodyParser.urlencoded({extended: true})); 
app.use('/', router);

const PORT = 8081;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);   
app.listen(PORT, () => console.log(`Server is running successfully on port ${PORT}`));

DefaultData();