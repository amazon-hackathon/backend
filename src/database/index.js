import mongoose from 'mongoose';
import { ServiceModel, ServiceQuery } from './models/service.js';

(() => {
	mongoose.connect(process.env.DB_URI);
})();

export { ServiceModel, ServiceQuery };
