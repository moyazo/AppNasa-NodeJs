const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


const connectToDb = async () => {
    console.log(process.env.USER)
    const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@nasa-app.hficxsv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("DB CONNECTED!"))
        .catch((e) => console.log(e.message));
}


module.exports = connectToDb;