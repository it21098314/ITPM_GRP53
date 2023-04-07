const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let donationSchema = new Schema({
  D_name: {
    type : String,
    required: true

 },
 D_email: {
    type : String,
    required: true
 },
 D_address: {
     type : String,
     required: true

     
  },
D_phone: {
    type : String,
    required: true
  },

D_type: {
     type : String,
     required: true
  },
  
D_discrition: {
  type : String,
  required: true
},

D_amount: {
  type : String,
  required: true
}

},

{
    collection: 'donations'
  })

module.exports = mongoose.model('Donation', donationSchema)