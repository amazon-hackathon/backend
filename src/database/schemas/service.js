import mongoose from 'mongoose';
const { Schema } = mongoose;

const serviceSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone_number: String,
	state: String,
	service_type: String,
	description: String,
});

export default serviceSchema;
