import mongoose from 'mongoose';
import service from '../schemas/service.js';

const ServiceModel = mongoose.model('service', service);
const ServiceQuery = new mongoose.model('service', service);

export { ServiceModel, ServiceQuery };
