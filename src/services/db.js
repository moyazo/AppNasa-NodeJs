import mongoose from 'mongoose';
mongoose.set("strictQuery", false);


export const connectToDb = async () => {

    mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("DB CONNECTED!"))
        .catch((e) => console.log(e.message));

}
