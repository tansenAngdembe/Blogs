const mongoose = require("mongoose")

const connection = async (uri)=>{
   try {
    await mongoose.connect(uri)
   } catch (error) {
    console.log(error)
   }
}
module.exports = connection