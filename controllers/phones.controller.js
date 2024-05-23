import Phone from "../models/phone.model.js"

const task1 = async (req, res) => {
    try {
        const avgPrices = await Phone.aggregate([
            { $group: { _id: '$manufacturer', avgPrice: { $avg: '$price' } } }
        ]);
        res.json(avgPrices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const task4 = async (req, res) => {
    try {
        const phones = await Phone.find().sort({ price: 1 }).skip(4).limit(6);
        res.json(phones);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const task5 = async (req, res) => {
    try {
        const manufacturerStats = await Phone.aggregate([
            { $group: { _id: '$manufacturer', avgPrice: { $avg: '$price' }, maxPrice: { $max: '$price' }, minPrice: { $min: '$price' } } }
        ])
        res.json(manufacturerStats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const task6 = async (req, res) => {
    try {
        const maxMemoryPerManufacturer = await Phone.aggregate([
            { $group: { _id: '$manufacturer', maxMemory: { $max: '$memory' } } }
        ]);
        res.json(maxMemoryPerManufacturer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const task7 = async (req, res) => {
    try {
        const maxMemoryPerManufacturer = await Phone.aggregate([
            { $group: { _id: '$manufacturer', maxMemory: { $max: '$memory' } } }
        ]);
        res.json(maxMemoryPerManufacturer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export {
    task1,
    task4,
    task5,
    task6,
    task7
}