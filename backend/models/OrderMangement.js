const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderManageSchema = new Schema({
  Date: {
    type : String,
    required: true
 },
 Confirmed_Orders: {
    type : String,
    required: true
 },
 Pending_Orders: {
     type : String,
     required: true
  },
 Total_Income: {
     type : String,
     required: true
  },
  Generated_By: {
    type : String,
    required: true
 },


},

{
    collection: 'ordermanage'
  })

module.exports = mongoose.model('orderManage', orderManageSchema)