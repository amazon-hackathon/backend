import 'dotenv/config';
import express from 'express';
import services from './services/app.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
	return res.status(200).send('Welcome to the API.');
});

app.use('/services', services);

app.listen(process.env.PORT, async () => {
	console.log(`listening on ${process.env.PORT}`);
});
