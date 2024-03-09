
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://ankithsharma80:N8du2cLdkglbsdEY@cluster0.wsacfbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Database has been connected successfully");
    } catch(error) {
        console.log(error.message);
    }
}

module.exports = { connectDB };