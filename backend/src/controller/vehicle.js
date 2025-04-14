import vehicleModel from "../models/poductmodel.js"

const createVehicle = async(req,res)=>{
   try {
      const vehicle = await vehicleModel.create(req.body)
      res.status(200).json(vehicle)
   } catch (error) {
      res.status(500).json({message: String(error)})
   }
}

const allVehicles = async(req,res) => {
   try {
      const vehicles = await vehicleModel.find({})
      res.status(200).json(vehicles)
   } catch (error) {
      res.status(500).json({message: String(error)})
   }
}

export {createVehicle,allVehicles}