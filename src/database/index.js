import mongoose from "mongoose";

const configOptions = {
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb://localhost:27017/cgbindia";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
