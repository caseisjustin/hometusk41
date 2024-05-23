import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
})
  
export default mongoose.model('Employee', employeeSchema)