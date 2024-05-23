import Sale from "../models/sale.model.js"
const task3 = async (req, res) => {
    try{
        const topEmployee = await Sale.aggregate([
            {$group: {_id: '$employee', totalSales: {$sum: 1}}},
            {$sort: {totalSales: -1}},
            {$limit: 1}
        ]);
        res.json(topEmployee);
    } catch(err){
        res.status(500).json({error: err.message});
    }
};

export {
    task3
}