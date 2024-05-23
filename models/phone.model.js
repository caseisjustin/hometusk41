import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  memory: {
    type: Number,
    required: true
  }
})

export default mongoose.model('Phone', phoneSchema);