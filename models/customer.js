const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/relationDemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Customer = require("./models/customer");
const Order = require("./models/order");

const addCust = async () => {
  try {
    const newOrder = new Order({ item: "chips", price: 20 });
    await newOrder.save();

    const newCust = new Customer({
      name: "karan Arjun",
      orders: [newOrder._id]
    });

    await newCust.save();

    console.log("Added new customer with order:", newCust);

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

addCust();