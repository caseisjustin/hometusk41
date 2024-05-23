import mongoose from "mongoose"

const saleSchema = new mongoose.Schema({
    phone_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phone',
        required: true
    },
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    sale_date: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Sale', saleSchema);