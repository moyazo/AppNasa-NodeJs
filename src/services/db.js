import mongoose from 'mongoose';
mongoose.set("strictQuery", false);


export const connectToDb = async () => {
    const uri = `mongodb+srv://${process.env.USER}:${process.env.USER}@nasa-app.hficxsv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("DB CONNECTED!"))
        .catch((e) => console.log(e.message));

}
