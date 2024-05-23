import Sale from "../models/sale.model.js"

const task2 = async (req, res) => {
    try {
        const purchaseStats = await Sale.aggregate([
            { $group: { _id: '$customer', totalPhones: { $sum: 1 } } }
        ]);
        res.json(purchaseStats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export default {
    task2
}