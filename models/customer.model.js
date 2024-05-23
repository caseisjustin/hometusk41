import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }
})
  
export default mongoose.model('Customer', customerSchema);
