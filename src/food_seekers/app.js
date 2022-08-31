import express from 'express';
import jwt from 'jsonwebtoken';
import { connection } from '../database/utils';

const router = express.Router();

router.post('/sign-up', (req, res) => {
	const { name, country, state, city, address, zip_code } = req.body;
	connection.query(
		'SELECT org_name FROM food_seekers WHERE org_name = ? AND org_country = ? AND org_state = ? AND org_city = ? AND org_zip = ?',
		[name, country, state, city, zip_code],
		(err, result) => {
			if (result) {
				return res.status(400).send({
					message: 'user already exists',
				});
			}
		}
	);
	connection.query(
		'INSERT INTO food_seekers (account_created, last_updated, org_name, org_country, org_state, org_city, org_address, org_zip) values (?, ?, ?, ?, ?, ?, ?, ?)',
		[Date.now(), Date.now(), name, country, state, city, address, zip_code],
		(err) => {
			if (err) {
				return res.status(400).send({
					message: err.message,
				});
			}
		}
	);
	const token = jwt.sign(
		{
			name,
			country,
			state,
			city,
			address,
			zip_code,
		},
		process.env.JWT_SECRET,
		{ expiresIn: '1h' }
	);
	res.status(200).send({
		token,
	});
});

export default router;
