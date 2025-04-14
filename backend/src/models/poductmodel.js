import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  seating: { type: Number, required: true },
  Images: { type: Array, required: true },
  fuelType: { type: String },
  Exteriorcolor: { type: Array, required: true },
  Interiorcolor: { type: Array, required: true },
  description: { type: String, required: true },
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    wheelbase: Number
  },
  wheelOptions: [
    {
      style: String,
      image: String
    }
  ],
  Seattype: [
   {
     name: String,
     price: Number
   }
 ],
  AddOns: [
    {
      name: String,
      price: Number
    }
  ],
  available: { type: Boolean, default: true },
  ratings: { type: Number, default: 0 },
  reviews: [
    {
      username: String,
      rating: Number,
      comment: String
    }
  ]
})

const vehicleModel = mongoose.model('vehicle', vehicleSchema)
export default vehicleModel
