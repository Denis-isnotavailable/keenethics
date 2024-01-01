const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bikeRouter = require('./routers/bikeRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", bikeRouter);

const startApp = async () => {
    try {     
        await mongoose.connect("mongodb+srv://denisslivinsk:denisslivinsk@cluster0.umeldyy.mongodb.net/");
        console.log("Database connection successful");

        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        })
    } catch (e) {
        console.error(`Failed to launch app with error: ${e.message}`);       
    }
};

startApp();