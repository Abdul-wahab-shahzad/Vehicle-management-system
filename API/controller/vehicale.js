const Vehicale=require("../models/vehicale")

const vehicale= require('../models/vehicale')
 const createvehicale = async (req, res, next) => {
    const newVehicale = new vehicale(req.body);
  
    try {
      const savedVehicale = await newVehicale.save();
      res.status(200).json(savedVehicale);
    } catch (err) {
      next(err);
    }
  };


   const updateVehicale = async (req, res, next) => {
    try {
      const updatedVehicale = await Vehicale.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedVehicale);
    } catch (err) {
      next(err);
    }
  };

   const deleteVehicale = async (req, res, next) => {
    try {
      await Vehicale.findByIdAndDelete(req.params.id);
      res.status(200).json("Vehicale has been deleted.");
    } catch (err) {
      next(err);
    }
  };

   const getVehicale = async (req, res, next) => {
    try {
      const vehicale = await Vehicale.findById(req.params.id);
      res.status(200).json(vehicale);
    } catch (err) {
      next(err);
    }
  };

   const getVehicales = async (req, res, next) => {
   
    const vehicales = await Vehicale.find();
    res.json(vehicales);
    console.log(vehicales)

      
  };


  module.exports={createvehicale,updateVehicale,getVehicale,getVehicales,deleteVehicale}