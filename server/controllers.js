const Bikes = require('./models/Bikes');
const Stats = require('./models/Stats');

const getAllBikes = async (req, res) => {
    try {        
        const data = await Bikes.find();
        
        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e.message);
        res.json({ status: 'failed', message: e.message });
    }
}

const addBike = async (req, res) => {
    try {
        const bike = req.body;
        
        const data = await Bikes.create({ ...bike });

        await updateStats();

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e);
        res.json({ status: 'failed', message: e.message });
    }
}

const updateBike = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, type, color, wheelSize, price, ID, description, status } = req.body;        

        if (!name && !type && !color && !wheelSize && !price && !ID && !description && !status) {
            return res.status(400).json({ message: "missing fields", status: "error" });
        }
        
        const data = await Bikes.findByIdAndUpdate(
            { _id: id },
            { $set: { name, type, color, wheelSize, price, ID, description, status } },
            { new: true }
        );

        await updateStats();

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e);
        res.json({ status: 'failed', message: e.message });
    }
}

const deleteBike = async (req, res) => {
    try {
        const { id } = req.params;
        
        const data = await Bikes.findByIdAndDelete({_id: id});
        
        await updateStats();

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e);
        res.json({ status: 'failed', message: e.message });
    }
}

const allStats = async (req, res) => {
    try {
        const data = await Stats.find();

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e);
        res.json({ status: 'failed', message: e.message });
    }
}

const updateStats = async () => {
    const stats = {
        totalBikes: 0,
        available: 0,
        busy: 0,
        unavalable: 0,
        averagePrice: 0,
    }
    const bikes = await Bikes.find();

    stats.totalBikes = bikes.length;
    const total = bikes.reduce((totalPrice, bike) => {
        stats[bike.status] += 1;
        if (bike.status !== "unavailable") return totalPrice += bike.price

        return totalPrice;        
    }, 0)
    stats.averagePrice = Math.trunc(total / (stats.available + stats.busy) * 100) / 100;

    await Stats.findByIdAndUpdate(
        { _id: '65929fe90fc0e386ee5e08ee' },
        { $set: { ...stats } },
        { new: true }
    );    
}

module.exports = {
    getAllBikes,
    addBike,
    deleteBike,
    updateBike,
    allStats
}