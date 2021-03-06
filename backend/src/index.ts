import express from 'express';
import dotenv from 'dotenv';
import getAll from './routes/getAll.js';
import updateOne from './routes/updateOne.js';
import buyOne from './routes/buyOne.js';
import initDB from './db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

initDB();

app.use(cors({
	origin: 'http://localhost:8080',
	optionsSuccessStatus: 200
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/cola', getAll);
app.use('/cola', updateOne);
app.use('/cola', buyOne);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});