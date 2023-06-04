const mongoose=require("mongoose");



const vehicale=mongoose.Schema({
    vehicale_name : String,
    Comapny:String,
    Registraion_number:Number,
    Make:String,
    Model:String,
    Year:String,
    Engine_size:String,
    Price:Number,
    photos: {
        type: [String],
      },

});



const Vehicale = mongoose.model("vehicale", vehicale);

module.exports = Vehicale;