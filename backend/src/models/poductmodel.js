import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  seating: { type: Number, required: true },
  image: { type: String, required: true },
  fuelType: { type: String },
  Exteriorcolor: [
    {
      color: String,
      price: Number
    }
  ],
  Interiorcolor: [
    {
      color: String,
      price: Number
    }
  ],
  shortdescription: {type: String,required:true},
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
      image: String,
      price: Number
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
  ],
  category: {type:String, required: true}
})

const vehicleModel = mongoose.model('vehicle', vehicleSchema)
export default vehicleModel
