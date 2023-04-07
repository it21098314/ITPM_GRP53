const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogSchema = new Schema({
  B_Date: {
    type : String,
    required: true

 },
 B_Author: {
    type : String,
    required: true
 },
 B_Description: {
     type : String,
     required: true

     
  }

},

{
    collection: 'blogs'
  })

module.exports = mongoose.model('Blog', blogSchema)