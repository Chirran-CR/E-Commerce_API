const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  itemName:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    default:0
  }
});

const itemModel = mongoose.model("item", itemSchema);
module.exports = itemModel;
