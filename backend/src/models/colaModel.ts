import mongoose from "mongoose";

const colaSchema = new mongoose.Schema({
  name: String,
  description: String,
  cost: Number,
  num_available: Number
}, {
  collection: 'colas'
});

const ColaModel = mongoose.model('Cola', colaSchema);

export default ColaModel