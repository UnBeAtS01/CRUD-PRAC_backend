import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
const PORT = 8000;
const URL = 'mongodb+srv://unbeat01:MOmo1234567@crudop.oaqwr.mongodb.net/CRUDOP?retryWrites=true&w=majority';
app.use('/', route);
mongoose.connect(URL).then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    })
}).catch(err => { console.log(err.message) });
