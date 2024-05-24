//Creating a Model for storing data in our Mongo Database backend

const mongoose = require("mongoose"); //import mongoose library
const ProductSchema = mongoose.Schema(
  //create schema for data using the mongoose schema function
  {
    name: {
      //Create property and field objects
      type: String,
      required: [true, "Please enter product name."],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, //timestamp data creation and updates
  }
);

const Product = mongoose.model("Product", ProductSchema); //create model using mongoose model function (name, schema)
module.exports = Product; //export model
