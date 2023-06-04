const express=require("express")
const Vehicale=require('../models/vehicale')
const router=express.Router()
const { createvehicale,updateVehicale,deleteVehicale,getVehicale,getVehicales} =require(  "../controller/vehicale")
router.post('/',createvehicale)
router.put('/:id',updateVehicale)
router.delete('/:id',deleteVehicale)
router.get('/find/:id',getVehicale)
router.get('/',getVehicales)


module.exports=router