const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let instaSchema = new Schema({
  I_id: {
    type : String,
    required: true

 },
 I_name: {
    type : String,
    required: true
 },
 I_email: {
     type : String,
     required: true

     
  },
 I_address: {
     type : String,
     required: true
  },
  
I_phone: {
  type : String,
  required: true
},
I_coll: {
  type : String,
  required: true
},
I_edu: {
  type : String,
  required: true
}

},

{
    collection: 'instas'
  })

module.exports = mongoose.model('Insta', instaSchema)