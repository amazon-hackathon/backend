import express from 'express';
import { ServiceModel, ServiceQuery } from '../database/index.js';

const router = express.Router();

router.post('/add-service', async (req, res) => {
	const { firstName, lastName, email, phone_number, state, service_type, description } = req.body;
	ServiceModel.create(
		{ firstName, lastName, email, phone_number, state, service_type, description },
		(err, n) => {
			if (err) return res.status(500).send('Error adding the service');
		}
	);
	return res.status(200).send('Added service');
});

router.get('/get-all', async (req, res) => {
	const s = req.query.service;
	if (s == undefined) {
		return res.status(200).send(await ServiceQuery.find({}));
	}
	return res.status(200).send(await ServiceQuery.find({ service_type: `${s}` }));
});

export default router;
