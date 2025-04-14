import express from 'express'
import { allVehicles, createVehicle } from '../controller/vehicle.js';

const vehicleRouter = express.Router();

vehicleRouter.post("/createvehicle",createVehicle);
vehicleRouter.get("/vehicles",allVehicles);

export default vehicleRouter